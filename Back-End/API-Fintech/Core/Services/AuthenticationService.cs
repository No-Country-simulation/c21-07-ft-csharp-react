using API_Fintech.Core.Adapters.Middlewares;
using API_Fintech.Core.Adapters.Middlewares.ExceptionMiddleware;
using API_Fintech.Infraestructure.Data.UnitOfWork;
using API_Fintech.InterfaceAdapters;
using API_Fintech.Models.Authentication.Users;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Net.NetworkInformation;
using System.Security.Claims;
using System.Text;

namespace API_Fintech.Core.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        
        private readonly IUnitOfWork _unitOfWork;
        private readonly ISecurityService _securityService;
        private readonly IConfiguration _configuration;

        public AuthenticationService(IUnitOfWork unitOfWork, ISecurityService securityService, IConfiguration configuration)
        {
            _unitOfWork = unitOfWork;
            _securityService = securityService;
            _configuration = configuration;
        }

        public async Task<string> GetToken(LoginDto dto)
        {
            try
            {

                var userRepository = _unitOfWork.GetRepository<UserAuth, long>();
                var hash = await userRepository.GetProyected(q => q.Email == dto.Email, p => p.Password) ?? throw new BusinessNotFoundException("ErrUserNotFound");

                if (!_securityService.Verify(dto.Password, hash)) throw new BusinessException("ErrInvalidEmailOrPassword");

                return GenerateTokenJwt(dto.Email);
            }
            catch (Exception ex)
            {
               Console.WriteLine(ex.Message);
            }

            return string.Empty;
          
        }

        public async Task<bool> ValidatePinWithEmail(string pin, string email)
        {

            var userAuthRepository = _unitOfWork.GetRepository<UserAuth, long>();

            var userPin = await userAuthRepository.GetProyected(q => q.Email == email, p => p.PIN);

            return userPin == null ? throw new BusinessNotFoundException("ErrUserNotFound") : _securityService.Verify(pin, userPin);
        }

        public async Task<long?> GetUser(string email)
        {
            var userRepository = _unitOfWork.GetRepository<UserAuth, long>();
            long? user = await userRepository.GetProyected(q => q.Email == email, p => p.Id);

            return user;
        }
        private string GenerateTokenJwt(string email)
        {
            var secretkey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetValue<string>("Audience:Secret")));
            var tokenDescription = new SecurityTokenDescriptor
            {
                //Issuer = _configuration.GetValue<string>("Audience:Iss")
                //Audience = _configuration.GetValue<string>("Audience:Aud")
                Expires = DateTime.UtcNow.AddYears(1),
                SigningCredentials = new SigningCredentials(secretkey, SecurityAlgorithms.HmacSha256Signature),
                Subject = new


                (
                    new Claim[]
                    {
                        new(ClaimTypes.NameIdentifier, email),
                    }
               )
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescription);

            return tokenHandler.WriteToken(token);
        }
    }
}
