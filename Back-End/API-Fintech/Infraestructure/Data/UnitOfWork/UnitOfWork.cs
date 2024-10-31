using API_Fintech.Infraestructure.Data.Config.Context;
using API_Fintech.Infraestructure.Data.Repository;
using API_Fintech.Models.Authentication;
using Microsoft.EntityFrameworkCore;

namespace API_Fintech.Infraestructure.Data.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DefaultContext _context;

        public UnitOfWork(DefaultContext context)
        {
            _context = context;
        }

        public async Task RollBackTransactionAsync()
        {
            await _context.Database.RollbackTransactionAsync();
        }

        public async Task BeginTransactionAsync()
        {
          await   _context.Database.BeginTransactionAsync();
        }

        public async Task CommitTransactionAsync()
        {
           await _context.Database.CommitTransactionAsync();
        }
        public async Task<int> Commit()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public void DetachAllEntities()
        {
            foreach (var entry in _context.ChangeTracker.Entries())
            {
                entry.State = EntityState.Detached;
            }
        }
        public IRepository<TE, TI> GetRepository<TE, TI>() where TE : EntityBase<TI>
        {
            return new Repository<TE, TI>(_context);
        }
    }
}
