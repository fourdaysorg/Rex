using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RexWeb.Business
{
    public class DonationRepository : Repository<Donation>
    {
        static DonationRepository()
        {
            var campaigns = new CampaignRepository();
            entities.Add(new Donation()
            {
                Id = 1,
                Campaign = campaigns.GetById(1),
                Description = "6 colchones y 3 bidones de agua"
            });
        }
    }

    public class Donation : IEntity
    {
        public int Id { get; set; }

        public Campaign Campaign { get; set; }
        public string Description { get; set; }

    }
}
