using API_Fintech.Infraestructure.Data.Config.EntitiesConfig;
using Microsoft.EntityFrameworkCore;


namespace API_Fintech.Infraestructure.Data.Config.Context
{
    public class DefaultContext : DbContext
    {
        public DefaultContext(DbContextOptions options) : base(options)
        {
        }

        static readonly ILoggerFactory _loggerFactory = new LoggerFactory(new[]
        {
            new Microsoft.Extensions.Logging.Debug.DebugLoggerProvider()
        });

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            optionsBuilder.UseLoggerFactory(_loggerFactory);
            optionsBuilder.EnableSensitiveDataLogging();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new UserAuthConfiguration());
            modelBuilder.ApplyConfiguration(new AccountConfiguration());
            modelBuilder.ApplyConfiguration(new TransactionConfiguration());

            Seeds.SeedData.Seeds(modelBuilder);
        }

    }
}
