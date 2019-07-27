using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace RexWeb.Models
{
    public class DonationModel
    {
        public int Id { get; set; }
        public string Description { get; set; }

        public int CampaignId { get; set; }

        [DisplayName("Campaign")]
        public string CampaignName { get; set; }
    }
}
