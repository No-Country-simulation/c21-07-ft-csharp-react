using API_Fintech.InterfaceAdapters;

namespace API_Fintech.Core.Services.Interfaces
{
    public interface IAuthenticationService
    {
        Task<string> GetToken(LoginDto dto);
        Task<long?> GetUser(string email);
        Task<bool> ValidatePinWithEmail(string pin, string email);
    }
}
