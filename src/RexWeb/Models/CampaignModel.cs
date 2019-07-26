using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace RexWeb.Models
{
    public class CampaignModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

    }
}