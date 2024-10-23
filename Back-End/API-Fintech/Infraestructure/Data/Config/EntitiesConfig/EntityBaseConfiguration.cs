using API_Fintech.Models.Authentication;
using Microsoft.EntityFrameworkCore;

namespace API_Fintech.Infraestructure.Data.Config.EntitiesConfig
{
    public abstract class EntityBaseConfiguration<T, TI> : IEntityTypeConfiguration<T> where T : EntityBase<TI> 
    {
        public virtual void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<T> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
        }
    }
}
