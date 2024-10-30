using API_Fintech.Core.Entities.Transaction;
using API_Fintech.Models.Authentication.Users;
using API_Fintech.Models.Transaction;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace API_Fintech.Infraestructure.Data.Config.EntitiesConfig
{
    public class TransactionConfiguration : EntityBaseConfiguration<Transaction, long>
    {
        public override void Configure(EntityTypeBuilder<Transaction> builder)
        {
            base.Configure(builder);

            builder.ToTable("Transactions");

            builder.Property(t => t.OriginAccountId).HasColumnName("OriginAccountId").IsRequired();
            builder.Property(t => t.DestinationAccountId).HasColumnName("DestinationAccountId").IsRequired();
            builder.Property(t => t.Amount).HasColumnName("Amount").IsRequired();
            builder.Property(t => t.Type).HasColumnName("Type").IsRequired();
            builder.Property(t => t.Date).HasColumnName("Date").IsRequired();
            builder.Property(t => t.Motivo).HasColumnName("Motivo").IsRequired();
            builder.Property(t => t.Amount).
                HasColumnType("decimal(18,2)").
                IsRequired();

            


    

        }
    }
}
