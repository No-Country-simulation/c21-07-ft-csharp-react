using System.Security.Claims;
using System.Transactions;
using API_Fintech.Core.Adapters.Middlewares.ExceptionMiddleware;
using API_Fintech.Infraestructure.Data.UnitOfWork;
using API_Fintech.InterfaceAdapters;
using API_Fintech.Models.Authentication.Users;
using API_Fintech.Models.Transaction;

namespace API_Fintech.Services
{
    public class AccountService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public AccountService(IUnitOfWork unitOfWork, IHttpContextAccessor httpContextAccessor)
        {
            _unitOfWork = unitOfWork;
            _httpContextAccessor = httpContextAccessor;
        }

        // Obtener el saldo
        public async Task<SaldoResponseDto> GetSaldoAsync(string email)
        {
            var accountRepository = _unitOfWork.GetRepository<Account, long>();
            var userAuthRepository = _unitOfWork.GetRepository<UserAuth, long>();

            // Obtener el usuario basado en el email
            var userAuth = await userAuthRepository.GetProyected(
                q => q.Email == email,
                p => new { p.Id }
            ) ?? throw new BusinessNotFoundException("ErrUserNotFound");

            // Obtener el balance de la cuenta logeada
            var accountBalance = await accountRepository.GetProyected(
                q => q.UserAuthId == userAuth.Id,
                p => (double?)p.Balance
            ) ?? throw new BusinessNotFoundException("ErrAccountNotFound");

            return new SaldoResponseDto { Saldo = accountBalance };
        }


        // obtener detalles cuenta destino
        public async Task<AccountDetailsDto?> GetAccountDetailsByIdAsync(long accountNumber)
        {
            var accountRepository = _unitOfWork.GetRepository<Account, long>();
            var userRepository = _unitOfWork.GetRepository<UserAuth, long>();

            var account = await accountRepository.GetProyected(
                a => a.AccountNumber == accountNumber,
                a => new { a.Id, a.UserAuthId }
            );

            if (account == null) return null;

            var userDetails = await userRepository.GetProyected(
                u => u.Id == account.UserAuthId,
                u => new AccountDetailsDto
                {
                    Id = account.Id,
                    Nombre = u.FirstName,
                    Apellido = u.LastName
                }
            );

            return userDetails;
        }

        // obtener email del user logged
        private string ObtenerEmailUsuarioLogeado()
        {
            var emailClaim = _httpContextAccessor.HttpContext?.User.FindFirst(ClaimTypes.NameIdentifier);

            if (emailClaim == null || string.IsNullOrEmpty(emailClaim.Value))
            {
                throw new UnauthorizedAccessException("Usuario no autenticado o el email no se encuentra en los claims.");
            }

            return emailClaim.Value; 
        }
    }
}