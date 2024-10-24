namespace API_Fintech.Core.Adapters.Middlewares.ExceptionMiddleware
{
    public class BusinessUnauthorizedException : Exception
    {
        public BusinessUnauthorizedException(string message) : base(message) { }
    }

}
