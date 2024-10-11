namespace API_Fintech.Core.Adapters.Middlewares.ExceptionMiddleware
{
    public class BusinessForbiddenException : Exception
    {
        public BusinessForbiddenException(string message) : base(message) { }
    }

}
