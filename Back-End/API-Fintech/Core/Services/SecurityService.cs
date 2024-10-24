namespace API_Fintech.Core.Services
{
    public class SecurityService : ISecurityService
    {
        public bool Verify(string password, string hash)
        {
            try
            {
                return BCrypt.Net.BCrypt.Verify(password, hash);
            }
            catch { return false; }


        }
    }
}
