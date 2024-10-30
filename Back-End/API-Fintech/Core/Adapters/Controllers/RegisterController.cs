using API_Fintech.Core.Services;
using API_Fintech.InterfaceAdapters;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_Fintech.Core.Adapters.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {

        private readonly RegisterService registerService;

        public RegisterController(RegisterService registerService)
        {
            this.registerService = registerService;
        }

        [HttpPost]
        public async Task<ActionResult> Register([FromBody] RegisterDto dto)
        {
            try
            {
                await registerService.Register(dto);


                return Ok("User creado con exito");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
