using API_Fintech.Core.Services;
using API_Fintech.InterfaceAdapters;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Org.BouncyCastle.Bcpg;
using System.Security.Claims;

namespace API_Fintech.Core.Adapters.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {

        private readonly TransactionService _transactionService;

        public TransactionController(TransactionService transactionService)
        {
            _transactionService = transactionService;
        }


        [Authorize]
        [HttpPost("CreateTransaction")]
        public async Task<ActionResult> CreateTransaction([FromBody] TransferenceDto dto)
        {
            try
            {
                var email = User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                if (email == null)
                {
                    return Unauthorized("No se ha podido obtener el email del usuario");
                }

                await _transactionService.Transfer(dto, email);

                return Ok("Transaccion creada con exito");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [Authorize]
        [HttpGet("GetLastTenTransactions")]

        public async Task<IActionResult> GetLastTenTransactionsC()
        {
            var email = User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (email == null)
            {
                return Unauthorized("No se ha podido obtener el email del usuario");
            }

            var transactions = await _transactionService.GetLastTenTransactions(email);

            return Ok(transactions);
        }
    }
}
