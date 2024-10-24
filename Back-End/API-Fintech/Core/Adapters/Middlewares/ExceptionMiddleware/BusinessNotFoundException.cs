namespace API_Fintech.Core.Adapters.Middlewares.ExceptionMiddleware
{
    public class BusinessNotFoundException : Exception
    {
        public BusinessNotFoundException(string message) : base(message) { }
    }

}
