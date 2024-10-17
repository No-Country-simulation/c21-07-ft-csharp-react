
using API_Fintech.InterfaceAdapters;

namespace API_Fintech.Core.Services
{
    public interface IAuthenticationService
    {
        Task<string> GetToken(LoginDto dto);
        Task<long?> GetUser(string email);
    }
}
