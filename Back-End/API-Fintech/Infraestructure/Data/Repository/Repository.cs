using API_Fintech.Models.Authentication;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using EFCore.BulkExtensions;
using API_Fintech.Infraestructure.Data.Config.Context;

namespace API_Fintech.Infraestructure.Data.Repository
{
    public class Repository<TE, TI> : IRepository<TE, TI> where TE : EntityBase<TI>
    {
        private readonly DbSet<TE> _dbSet;
        private readonly DefaultContext _context;

        public Repository(DefaultContext context)
        {
            _context = context;
            _dbSet = context.Set<TE>();
        }

        public async Task<TE> Add(TE entity)
        {
            var valueTask = await _dbSet.AddAsync(entity);

            return valueTask.Entity;
        }

        public async Task<IEnumerable<TE>> AddMany(IEnumerable<TE> entities)
        {
            await _dbSet.AddRangeAsync(entities);
            return entities;
        }

        public async Task<IEnumerable<TE>> AddMany(TE[] entities)
        {
            await _dbSet.AddRangeAsync(entities);
            return entities;
        }

        public async Task<bool> Any(Expression<Func<TE, bool>> predicate)
        {
            return await _dbSet.AnyAsync(predicate);
        }

        public void Delete(TE entity)
        {
            _dbSet.Remove(entity);
        }

        public void Update(TE entity)
        {
            _dbSet.Update(entity);
        }

        public void DeleteMany(IEnumerable<TE> entities)
        {
            _dbSet.RemoveRange(entities);
        }

        public void DeleteMany(TE[] entities)
        {
            _dbSet.RemoveRange(entities);
        }

        public async Task BulkInsert(IEnumerable<TE> entities)
        {

            await _context.BulkInsertAsync(entities.ToList());

        }

        public async Task BulkDelete(IEnumerable<TE> entities)
        {


            await _context.BulkDeleteAsync(entities.ToList());

        }

        public async Task BulkUpdate(IEnumerable<TE> entities)
        {

            await _context.BulkUpdateAsync(entities.ToList());

        }

        public async Task<TE?> Get(TI id)
        {
            TE? entity = null;
            if (id == null)
            {
                Console.WriteLine($"El valor de TI es nulo.");
            }
            try
            {
                // Asigna el resultado de la consulta a la variable entity
                entity = await _dbSet.FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                // Agrega logs o imprime la pila de llamadas para depurar el problema
                Console.WriteLine($"Error: {ex.Message}");
                Console.WriteLine($"Error: el valor de TI es: {id}");
                Console.WriteLine($"StackTrace: {ex.StackTrace}");

                // Relanza la excepción para que la aplicación pueda manejarla adecuadamente
                throw;
            }
            return entity;
        }

        public async Task<IList<TE>> GetAll()
        {
            return await _dbSet.AsNoTracking()
                               .ToListAsync();
        }

 
        public async Task<TProyected?> GetProyected<TProyected>(Expression<Func<TE, bool>> predicate, Expression<Func<TE, TProyected>> proyection)
        {
            return await _dbSet.Where(predicate)
                               .Select(proyection)
                               .FirstOrDefaultAsync();

        }
      

        public async Task<IEnumerable<TProyected?>> GetProyectedMany<TProyected>(
            Expression<Func<TE, bool>> predicate, Expression<Func<TE, TProyected>> proyection)
        {

            IEnumerable<TProyected>  result = await _dbSet.Where(predicate)
                            .Select(proyection)
                            .ToListAsync();

            return result;
        }
    }
}
