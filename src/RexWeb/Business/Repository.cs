using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RexWeb.Business
{
    public interface IEntity
    {
        int Id { get; }
    }

    public class Repository<T> where T : IEntity
    {
        protected static List<T> entities = new List<T>();

        public T GetById(int id)
        {
            return entities.Find(c => id == c.Id);
        }

        public IEnumerable<T> GetAll() { return entities; }

        public void Add(T entity)
        {
            entities.Add(entity);
        }

        public int Count()
        {
            return entities.Count;
        }
    }
}
