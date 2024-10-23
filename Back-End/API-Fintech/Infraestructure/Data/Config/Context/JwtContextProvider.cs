using System.Security.Claims;

namespace API_Fintech.Infraestructure.Data.Config.Context
{
    public class JwtContextProvider : IContextProvider
    {
        private readonly IHttpContextAccessor _context;

        public JwtContextProvider(IHttpContextAccessor context)
        {
            _context = context;
        }
        public string Email => _context?.HttpContext?.User?.Claims.Where(q => q.Type == ClaimTypes.NameIdentifier).Select(q => q.Value).SingleOrDefault();
    }
}
