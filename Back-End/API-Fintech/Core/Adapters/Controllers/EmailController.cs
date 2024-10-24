using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class EmailTestController : ControllerBase
{
    private readonly EmailService _emailService;

    public EmailTestController(EmailService emailService)
    {
        _emailService = emailService;
    }

    [HttpPost("send-test-email")]
    public async Task<IActionResult> SendTestEmail(string toEmail)
    {
        await _emailService.SendEmailAsync(toEmail, "Correo de Prueba", "Este es un correo de prueba enviado desde la API.");

        return Ok($"Correo de prueba enviado a {toEmail}");
    }
}
