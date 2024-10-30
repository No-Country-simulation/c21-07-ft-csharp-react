namespace API_Fintech.Core.Services
{
    public class SecurityService : ISecurityService
    {
        public bool Verify(string verificable, string hash)
        {
            try
            {
                return BCrypt.Net.BCrypt.Verify(verificable, hash);
            }
            catch { return false; }


        }
    }
}
