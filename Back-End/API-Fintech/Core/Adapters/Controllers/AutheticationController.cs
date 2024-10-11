using API_Fintech.Core.Services;
using API_Fintech.InterfaceAdapters;
using Microsoft.AspNetCore.Mvc;
using System.Security.Authentication;

namespace API_Fintech.Core.Adapters.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AutheticationController : ControllerBase
    {
        private readonly IAuthenticationService _authenticationService;

        public AutheticationController(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

          [HttpPost]
        public async Task<ActionResult> Login([FromBody] LoginDto dto) 
        { 

           try
            {

                var token = await _authenticationService.GetToken(dto);

                if (string.IsNullOrEmpty(token))
                {
                    return Unauthorized("Invalid credentials");
                }

                var userId = await _authenticationService.GetUser(dto.Email);

                var response = new
                {
                    UserId = userId,
                    Token = token
                };




                return Ok(response);
            }
           catch (AuthenticationException ex)
            {
                return Unauthorized(ex.Message + "AuthExcpAuthController");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}