namespace API_Fintech.Core.Services
{
    public interface ISecurityService
    {
        bool Verify(string password, string hasg);

    }
}
