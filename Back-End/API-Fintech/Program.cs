using API_Fintech.Core.Adapters.Middlewares.ExceptionMiddleware;
using API_Fintech.Core.Services;
using API_Fintech.Infraestructure.Data.Config.Context;
using API_Fintech.Infraestructure.Data.Repository;
using API_Fintech.Infraestructure.Data.UnitOfWork;
using API_Fintech.Models.Authentication;
using API_Fintech.Models.Authentication.Users;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Net;
using System.Text;


var builder = WebApplication.CreateBuilder(args);

// Configuraci�n del secreto para JWT
var secretKey = builder.Configuration.GetValue<string>("Audience:Secret") ?? "DefaultSecretKey";
var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));

// Configuraci�n de la validaci�n de token JWT
var tokenValidationParameters = new TokenValidationParameters
{
    ValidateIssuer = false,
    ValidateAudience = false,
    ValidIssuer = builder.Configuration.GetValue<string>("Jwt:Audience"),
    ValidAudience = builder.Configuration.GetValue<string>("Jwt:Issuer"),
    ValidateLifetime = true,
    RequireExpirationTime = true,
    IssuerSigningKey = signingKey,
    ValidateIssuerSigningKey = true
};

// Configuraci�n del esquema de autenticaci�n JWT
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Events = new JwtBearerEvents
        {
            OnMessageReceived = context =>
            {
                var accessToken = context.Request.Query["access_token"];
                var path = context.HttpContext.Request.Path;

                if (!string.IsNullOrEmpty(accessToken) && path.StartsWithSegments("/NotificationHub"))
                {
                    context.Token = accessToken;
                }

                return Task.CompletedTask;
            },
        };

        options.TokenValidationParameters = tokenValidationParameters;
    });

// Registrar servicios y repositorios
builder.Services.AddScoped<IContextProvider, JwtContextProvider>();
builder.Services.AddDbContext<DefaultContext>(options =>
{
    options.UseSqlServer(builder.Configuration["ConnectionStrings:Users"]);
});
builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped(typeof(EntityBase<long>), typeof(UserAuth));
builder.Services.AddScoped(typeof(IRepository<,>), typeof(Repository<,>));
builder.Services.AddScoped<IAuthenticationService, AuthenticationService>();
builder.Services.AddScoped<ISecurityService, SecurityService>();
builder.Services.AddScoped<RegisterService>();

// Configuraci�n del servicio de correos electr�nicos
builder.Services.AddScoped<EmailService>();

// Leer la configuraci�n del archivo appsettings.json
builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configuraci�n del pipeline para desarrollo (Swagger)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Middleware de manejo de excepciones con notificaci�n por correo
app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
        context.Response.ContentType = "application/json";

        var exceptionHandlerPathFeature = context.Features.Get<IExceptionHandlerPathFeature>();
        var exception = exceptionHandlerPathFeature?.Error;

        // Obtener el servicio de correo electr�nico
        var emailService = context.RequestServices.GetRequiredService<EmailService>();

        // Enviar un correo si ocurre una excepci�n
        if (exception != null)
        {
            var subject = "Error en la API";
            var body = $"Ha ocurrido un error: {exception.Message}\n{exception.StackTrace}";

            // Enviar correo al administrador
            await emailService.SendEmailAsync("admin@ejemplo.com", subject, body);
        }

        // Responder al cliente con el error
        await context.Response.WriteAsync(new ErrorDetails()
        {
            StatusCode = context.Response.StatusCode,
            Message = "Internal Server Error."
        }.ToString());
    });
});

app.UseAuthorization();

app.MapControllers();

app.Run();