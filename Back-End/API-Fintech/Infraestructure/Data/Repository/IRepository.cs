using API_Fintech.Models.Authentication;
using System.Linq.Expressions;

namespace API_Fintech.Infraestructure.Data.Repository
{
    public interface IRepository<TE, TI> where TE : EntityBase<TI>
    {
        Task<IList<TE>> GetAll();
        Task<TE?> Get(TI id);
        void Update(TE entity);
        Task<TE> Add(TE entity);
        void Delete(TE entity);
        Task<bool> Any(Expression<Func<TE, bool>> predicate);

        Task<TProyected?> GetProyected<TProyected>(Expression<Func<TE, bool>> predicate, Expression<Func<TE, TProyected>> proyection);
        Task<IEnumerable<TProyected?>> GetProyectedMany<TProyected>(Expression<Func<TE, bool>> predicate, Expression<Func<TE, TProyected>> projection);

        Task<IEnumerable<TProyected?>> GetProyectedMany<TProyected, TOrderBy>(Expression<Func<TE, bool>> predicate, Expression<Func<TE, TProyected> > projection,
            Expression<Func<TE, TOrderBy>> orderBy, bool isDescending, int take);

         void DeleteMany(IEnumerable<TE> entities);
        void DeleteMany(TE[] entities);
        Task<IEnumerable<TE>> AddMany(TE[] entities);
        Task<IEnumerable<TE>> AddMany(IEnumerable<TE> entities);
    }

}
