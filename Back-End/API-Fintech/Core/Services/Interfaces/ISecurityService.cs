namespace API_Fintech.Core.Services.Interfaces
{
    public interface ISecurityService
    {
        bool Verify(string password, string hasg);

    }
}
