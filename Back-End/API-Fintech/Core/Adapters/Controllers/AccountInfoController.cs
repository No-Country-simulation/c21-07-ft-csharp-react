using API_Fintech.Core.Adapters.Middlewares.ExceptionMiddleware;
using API_Fintech.InterfaceAdapters;
using API_Fintech.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace API_Fintech.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountInfoController : ControllerBase
    {
        private readonly AccountService _accountService;

        public AccountInfoController(AccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet("GetAccountDetailsById/{cbu}")]
        public async Task<IActionResult> GetAccountDetailsById(long cbu)
        {
            var accountDetails = await _accountService.GetAccountDetailsByIdAsync(cbu);
            if (accountDetails == null)
            {
                return NotFound("Cuenta no encontrada.");
            }
            return Ok(accountDetails);
        }

        //Para obtener el saldo hay que ignresar el Token generado al logearse en la solicitud
        [Authorize]
        [HttpGet("GetSaldo")]
        public async Task<IActionResult> GetSaldo()
        {
            var email = User?.FindFirst(ClaimTypes.NameIdentifier)?.Value; 

            if (string.IsNullOrEmpty(email))
            {
                return Unauthorized("Usuario no autenticado.");
            }

            try
            {
                var saldoResponse = await _accountService.GetSaldoAsync(email);
                return Ok(saldoResponse);
            }
            catch (BusinessNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}