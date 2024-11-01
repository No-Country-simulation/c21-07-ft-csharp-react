using API_Fintech.Core.Adapters.Middlewares.ExceptionMiddleware;
using API_Fintech.Infraestructure.Data.Repository;
using API_Fintech.Infraestructure.Data.UnitOfWork;
using API_Fintech.InterfaceAdapters;
using API_Fintech.Models.Authentication.Users;
using System.Text.RegularExpressions;

namespace API_Fintech.Core.Services
{
    public class RegisterService
    {
        IUnitOfWork _unitOfWork;

        public RegisterService( IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;

        }

        public async Task Register(RegisterDto dto)
        {
            if (string.IsNullOrWhiteSpace(dto.Email))
                throw new BusinessException("El campo 'Email' es requerido.");

            if (string.IsNullOrWhiteSpace(dto.Password))
                throw new BusinessException("El campo 'Password' es requerido.");

            if (string.IsNullOrWhiteSpace(dto.FirstName))
                throw new BusinessException("El campo 'FirstName' es requerido.");

            if (string.IsNullOrWhiteSpace(dto.LastName))
                throw new BusinessException("El campo 'LastName' es requerido.");

            if (!IsValidEmail(dto.Email))
                throw new BusinessException("El formato del 'Email' es inválido.");

            IRepository<UserAuth, long> _repository = _unitOfWork.GetRepository<UserAuth, long>();

            UserAuth? search =  await _repository.GetProyected(q => q.Email == dto.Email, q => q);

            if (search != null) {
                throw new BusinessException("ErrUserAlreadyExists");
            }
            await _repository.Add(new UserAuth
            {
                Email = dto.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password),
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                PIN = BCrypt.Net.BCrypt.HashPassword(dto.PIN.ToString()),
                Roles = ["NormalUser"]
            });

           await _unitOfWork.Commit();
        }
        private bool IsValidEmail(string email)
        {
            string emailRegex = @"^[^@\s]+@[^@\s]+\.[^@\s]+$";
            return Regex.IsMatch(email, emailRegex, RegexOptions.IgnoreCase);
        }
    }
}
