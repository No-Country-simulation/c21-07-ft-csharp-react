namespace API_Fintech.Core.Adapters.Middlewares.ExceptionMiddleware
{
    public class BusinessException : Exception
    {
        public BusinessException(string message) : base(message) { }
    }

}
