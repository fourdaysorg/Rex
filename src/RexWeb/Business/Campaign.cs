using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RexWeb.Business
{
    public class CampaignRepository
    {
        static List<Campaign> campaigns = new List<Campaign>();
        static CampaignRepository()
        {
            campaigns.AddRange(Enumerable.Range(1, 250)
                .Select(i => new Campaign()
                {
                    Id = i,
                    Name = "Huracán Katrina #" + i.ToString(),
                    ShortDescription = "El huracán Katrina fue uno de los más destructivos y el que causó más víctimas mortales de la temporada de huracanes en el Atlántico de 2005."
                }));
        }

        public Campaign GetById(int id)
        {
            return campaigns.Find(c => id == c.Id);
        }

        public IEnumerable<Campaign> GetAll() { return campaigns; }

        public void Add(Campaign campaign)
        {
            campaigns.Add(campaign);
        }
    }

    public class Campaign
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ShortDescription { get; set; }
        public string LongDescription { get; set; }

    }
}
