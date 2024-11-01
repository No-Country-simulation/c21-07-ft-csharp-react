using API_Fintech.Core.Adapters.Middlewares.ExceptionMiddleware;
using API_Fintech.Core.Entities.Transaction;
using API_Fintech.Core.Services.Interfaces;
using API_Fintech.Infraestructure.Data.UnitOfWork;
using API_Fintech.InterfaceAdapters;
using API_Fintech.Models.Authentication.Users;
using API_Fintech.Models.Transaction;


namespace API_Fintech.Core.Services
{
    public class TransactionService
    {
        IUnitOfWork _unitOfWork;
        ISecurityService _securityService;
        EmailService _emailService;
        public TransactionService(IUnitOfWork unitOfWork, ISecurityService securityService, EmailService emailService)
        {
            _emailService = emailService;
            _unitOfWork = unitOfWork;
            _securityService = securityService;
        }

        public async Task Transfer(TransferenceDto dto, string email)
        {

            var userAuthRepository = _unitOfWork.GetRepository<UserAuth, long>();
            var accountRepository = _unitOfWork.GetRepository<Account, long>();
            var transactionRepository = _unitOfWork.GetRepository<Transaction, long>();

            try
            {
                //Obtengo el userAuth con el email que viene del controller
                var callerUserAuth = await userAuthRepository.GetProyected(q => q.Email == email, p => p) ??
                    throw new BusinessNotFoundException("ErrUserNotFound");

    


                var userPin = dto.PIN.ToString();

                //Validamos el PIN que viene desde el Front
                if (!_securityService.Verify(userPin.ToString(), callerUserAuth.PIN)) throw new BusinessException("ErrInvalidPin");

                // Con el id del UserAuth Obtengo la cuenta del que solicita la transferencia
                var originAccount = await accountRepository.GetProyected(q => q.UserAuthId == callerUserAuth.Id, p => p) ??
                 throw new BusinessNotFoundException("ErrAccountNotFound");

                if (originAccount.AccountNumber == dto.DestinationAccountNumber) throw new BusinessException("ErrSameAccountTransfer");

                double amount = dto.Amount;

                if (originAccount.Balance < dto.Amount) throw new BusinessException("ErrInsufficientFunds");

                var destinationAccount = await accountRepository.GetProyected(q => q.AccountNumber == dto.DestinationAccountNumber, p => p) 
                    ?? throw new BusinessNotFoundException("ErrDestinationAccountNotFound");

                var receiverUserAuth = await userAuthRepository.GetProyected(q => q.Id == destinationAccount.UserAuthId, p => p) ??
                throw new BusinessNotFoundException("ErrDestinationUserNotFound");

                originAccount.Balance -= amount;
                destinationAccount.Balance += amount;

                Transaction caller = new()
                {
                    CompleteCallerName = $"{callerUserAuth.FirstName} {callerUserAuth.LastName}",
                    CompleteReceiverName = $"{receiverUserAuth.FirstName} {receiverUserAuth.LastName}",
                    OriginAccountId = originAccount.AccountNumber,
                    DestinationAccountId = destinationAccount.AccountNumber,
                    Amount = amount,
                    Type = "Debito",
                    Date = DateTime.Now,
                    Motivo = dto.Motivo
                };

                Transaction receiver = new()
                {

                    CompleteCallerName = $"{callerUserAuth.FirstName} {callerUserAuth.LastName}",
                    CompleteReceiverName = $"{receiverUserAuth.FirstName} {receiverUserAuth.LastName}",
                    OriginAccountId = originAccount.AccountNumber,
                    DestinationAccountId = destinationAccount.AccountNumber,
                    Amount = amount,
                    Type = "Credito",
                    Date = DateTime.Now,
                    Motivo = dto.Motivo

                };


                //Comenzamos la transaccion.
                await _unitOfWork.BeginTransactionAsync();

                await transactionRepository.Add(caller);
                await transactionRepository.Add(receiver);
                accountRepository.Update(originAccount);
                accountRepository.Update(destinationAccount);


                await _unitOfWork.Commit();

                //Aqui termina la Transaccion
                await _unitOfWork.CommitTransactionAsync();

                await _emailService.SendEmailAsync(receiverUserAuth.Email, "Transferencia Exitosa", "Se ha recibido una transferencia exitosa de " + $"{callerUserAuth.FirstName} {callerUserAuth.LastName}");
                await _emailService.SendEmailAsync(callerUserAuth.Email, "Transferencia Exitosa", "Se ha enviado una transferencia exitosa a " + $"{receiverUserAuth.FirstName} {receiverUserAuth.LastName}");

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                Console.WriteLine("RollingBack Transaction");
                await _unitOfWork.RollBackTransactionAsync();

            }
        }

        public async Task<IEnumerable<TransactionHistoryDto?>> GetLastTenTransactions(string email)
        {
            
       
                var transactionRepository = _unitOfWork.GetRepository<Transaction, long>();
                var userAuthRepository = _unitOfWork.GetRepository<UserAuth, long>();
                var accountRepository = _unitOfWork.GetRepository<Account, long>();

                var userAuth = await userAuthRepository.GetProyected(q => q.Email == email, p => p) ??
                    throw new BusinessNotFoundException("ErrUserNotFound");

                var userId = userAuth.Id;

                var account = await accountRepository.GetProyected(q => q.UserAuthId == userId, p => p) ??
                    throw new BusinessNotFoundException("ErrAccountNotFound");


                IEnumerable<Transaction?> transactions = await transactionRepository.GetProyectedMany(q => (q.OriginAccountId == account.AccountNumber & q.Type == "Debito")
                 || (q.DestinationAccountId == account.AccountNumber && q.Type == "Credito"),

                   x =>x, orderBy => orderBy.Date, true, 10);



                List<TransactionHistoryDto> transactionHistoryDtos = [];

                foreach (var transaction in transactions)
                {
                    if (transaction == null) continue;
                    if (transaction.Type == "Debito")
                    {
                        transactionHistoryDtos.Add(new TransactionHistoryDto
                        {
                            Id = transaction.Id,
                            Amount = transaction.Amount,
                            Date = transaction.Date,
                            Type = transaction.Type,
                            Name = transaction.CompleteReceiverName,
                        });

                    }
                    else if (transaction.Type == "Credito")
                    {
                        transactionHistoryDtos.Add(new TransactionHistoryDto
                        {
                            Id = transaction.Id,
                            Amount = transaction.Amount,
                            Date = transaction.Date,
                            Type = transaction.Type,
                            Name = transaction.CompleteCallerName,
                        });
                    }

                }

                return transactionHistoryDtos ?? throw new BusinessNotFoundException("ErrTransactionsNotFound");
             
        }


    }
    
}