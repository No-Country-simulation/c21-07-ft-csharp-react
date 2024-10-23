using API_Fintech.Core.Adapters.Middlewares.ExceptionMiddleware;
using API_Fintech.Infraestructure.Data.Repository;
using API_Fintech.Infraestructure.Data.UnitOfWork;
using API_Fintech.InterfaceAdapters;
using API_Fintech.Models.Authentication.Users;

namespace API_Fintech.Core.Services
{
    public class RegisterService
    {
        IUnitOfWork _unitOfWork;

        public RegisterService( IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;

        }

        public async Task Register(LoginDto dto)
        {
            IRepository<UserAuth, long> _repository = _unitOfWork.GetRepository<UserAuth, long>();

            UserAuth? search =  await _repository.GetProyected(q => q.Email == dto.Email, q => q);

            if (search != null) {
                throw new BusinessException("ErrUserAlreadyExists");
            }
            await _repository.Add(new UserAuth
            {
                Email = dto.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password),
                Roles = ["NormalUser"]
            });

           await _unitOfWork.Commit();
        }
    }
}
