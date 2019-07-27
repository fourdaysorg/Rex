using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using RexWeb.Business;

namespace RexWeb.Models
{
    public class DonationModel
    {
        public static DonationModel FromEntity(Donation entity)
        {
            return new DonationModel()
            {
                Id = entity.Id,
                Description = entity.Description,
                CampaignId = entity.Campaign.Id,
                CampaignName = entity.Campaign.Name
            };
        }

        public int Id { get; set; }
        public string Description { get; set; }

        public int CampaignId { get; set; }

        [DisplayName("Campaign")]
        public string CampaignName { get; set; }

    }
}
