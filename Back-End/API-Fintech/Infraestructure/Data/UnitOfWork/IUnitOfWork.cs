using API_Fintech.Infraestructure.Data.Repository;
using API_Fintech.Models.Authentication;


namespace API_Fintech.Infraestructure.Data.UnitOfWork
{
    public interface IUnitOfWork
    {
        Task<int> Commit();


        IRepository<TE, TI> GetRepository<TE, TI>() where TE : EntityBase<TI>;

        void DetachAllEntities();

        void Dispose();
    }

}
