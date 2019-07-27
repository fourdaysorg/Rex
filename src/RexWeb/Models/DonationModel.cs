using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RexWeb.Models
{
    public class DonationModel
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int CampaignId { get; set; }
    }
}
