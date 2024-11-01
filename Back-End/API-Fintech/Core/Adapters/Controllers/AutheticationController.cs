using API_Fintech.Core.Services;
using API_Fintech.Core.Services.Interfaces;
using API_Fintech.InterfaceAdapters;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Authentication;
using System.Security.Claims;

namespace API_Fintech.Core.Adapters.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AutheticationController : ControllerBase
    {
        private readonly AuthenticationService _authenticationService;

        public AutheticationController(AuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

        [HttpPost("Login")]
        public async Task<ActionResult> Login([FromBody] LoginDto dto)
        {

            try
            {

                var token = await _authenticationService.GetToken(dto);

                if (string.IsNullOrEmpty(token))
                {
                    Console.WriteLine("Aca esstamos pq no consiguio token");
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
                return Unauthorized(ex.Message + "AuthExceptionAuthController");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [Authorize]
        [HttpPost("ValidatePIN")]

        public async  Task<IActionResult> ValidatePIN([FromBody] int pin)
        {

            var email = User?.FindFirst(ClaimTypes.NameIdentifier)?.Value; 

            if (string.IsNullOrEmpty(email))
            {
                return Unauthorized("Invalid credentials");
            }

            var result =  await _authenticationService.ValidatePinWithEmail(pin.ToString(), email);

            if (!result)
            {
                return Unauthorized("Invalid PIN");
            }
            else
            {
                return Ok();
            }

        }
    }
}