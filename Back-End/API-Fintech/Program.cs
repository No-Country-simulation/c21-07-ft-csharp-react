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
using MailKit.Net.Smtp;
using MimeKit;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using API_Fintech.Models.Transaction;
using API_Fintech.Core.Entities.Transaction;
using API_Fintech.Services;

var builder = WebApplication.CreateBuilder(args);

// Configuración del secreto para JWT
var secretKey = builder.Configuration.GetValue<string>("Audience:Secret") ?? "DefaultSecretKey";
var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));

// Configuración de la validación de token JWT
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

// Configuración del esquema de autenticación JWT
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

// Configuración de Swagger con soporte para autenticación JWT
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "API Fintech",
        Version = "v1"
    });

    // Configuración para añadir el esquema de autenticación JWT en Swagger
    options.AddSecurityDefinition("Bearer", new Microsoft.OpenApi.Models.OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = Microsoft.OpenApi.Models.SecuritySchemeType.Http,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = Microsoft.OpenApi.Models.ParameterLocation.Header,
        Description = "Ingrese 'Bearer' seguido de un espacio y el token JWT."
    });

    options.AddSecurityRequirement(new Microsoft.OpenApi.Models.OpenApiSecurityRequirement
    {
        {
            new Microsoft.OpenApi.Models.OpenApiSecurityScheme
            {
                Reference = new Microsoft.OpenApi.Models.OpenApiReference
                {
                    Type = Microsoft.OpenApi.Models.ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    });
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
builder.Services.AddScoped(typeof(EntityBase<long>), typeof(Account));
builder.Services.AddScoped(typeof(EntityBase<long>), typeof(Transaction));
builder.Services.AddScoped(typeof(IRepository<,>), typeof(Repository<,>));
builder.Services.AddScoped<AuthenticationService>();
builder.Services.AddScoped<ISecurityService, SecurityService>();
builder.Services.AddScoped<RegisterService>();

builder.Services.AddScoped<AccountService>();

builder.Services.AddScoped<TransactionService>();


// Configuración del servicio de correos electrónicos
builder.Services.AddScoped<EmailService>();

// Leer la configuración del archivo appsettings.json
builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", builder =>
    {
        builder.WithOrigins("http://localhost:5173") // El origen de tu front-end
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

var app = builder.Build();


// Configuración del pipeline para desarrollo (Swagger)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowSpecificOrigin");

app.UseHttpsRedirection();

// Middleware de manejo de excepciones con notificación por correo
app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
        context.Response.ContentType = "application/json";

        var exceptionHandlerPathFeature = context.Features.Get<IExceptionHandlerPathFeature>();
        var exception = exceptionHandlerPathFeature?.Error;

        // Obtener el servicio de correo electrónico
        var emailService = context.RequestServices.GetRequiredService<EmailService>();

        // Enviar un correo si ocurre una excepción 
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

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();