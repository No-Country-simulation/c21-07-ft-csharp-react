using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using API_Fintech.Models.Transaction;
using API_Fintech.Models.Authentication.Users;

namespace API_Fintech.Infraestructure.Data.Config.EntitiesConfig
{
    public class AccountConfiguration : EntityBaseConfiguration<Account, long>
    {
        public override void Configure(EntityTypeBuilder<Account> builder)
        {
            base.Configure(builder);

            builder.ToTable("Acounts");
            builder.Property(u => u.Balance).HasColumnName("Balance");
            builder.Property(u => u.AccountNumber).HasColumnName("AccountNumber");
            builder.Property(u => u.AccountType).HasColumnName("AccountType");
            builder.Property(u => u.UserAuthId).HasColumnName("UserAuthId");


            builder.HasOne<UserAuth>()
              .WithOne()
              .HasForeignKey<Account>(u => u.UserAuthId)
              .IsRequired();


        }
    }
}
