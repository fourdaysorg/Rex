using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RexWeb.Business
{
    public class CampaignRepository : Repository<Campaign>
    {
        static CampaignRepository()
        {
            entities.AddRange(Enumerable.Range(1, 250)
                .Select(i => new Campaign()
                {
                    Id = i,
                    Name = "Huracán Katrina #" + i.ToString(),
                    ShortDescription = "El huracán Katrina fue uno de los más destructivos y el que causó más víctimas mortales de la temporada de huracanes en el Atlántico de 2005."
                }));
        }
    }

    public class Campaign : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ShortDescription { get; set; }
        public string LongDescription { get; set; }

    }
}
