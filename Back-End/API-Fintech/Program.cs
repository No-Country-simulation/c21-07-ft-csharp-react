using API_Fintech.Core.Adapters.Middlewares;
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
using System.Security.AccessControl;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
var secretKey = builder.Configuration.GetValue<string>("Audience:Secret") ?? "DefaultSecretKey";
var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));

// Add services to the container.



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

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Events = new JwtBearerEvents
        {
            OnMessageReceived = context =>
            {
                var accessToken = context.Request.Query["access_token"];

                // Si la solicitud es para el hub de notificaciones
                var path = context.HttpContext.Request.Path;
                if (!string.IsNullOrEmpty(accessToken) &&
                    (path.StartsWithSegments("/NotificationHub")))
                {
                    // Leer el token de la querystring
                    context.Token = accessToken;
                }
                return Task.CompletedTask;
            },

        };

        options.TokenValidationParameters = tokenValidationParameters;
    });


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

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}




app.UseHttpsRedirection();


// Exception handling middleware
app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
        context.Response.ContentType = "application/json";

        var exceptionHandlerPathFeature = context.Features.Get<IExceptionHandlerPathFeature>();
        var exception = exceptionHandlerPathFeature?.Error;

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
