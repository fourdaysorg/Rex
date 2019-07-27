using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RexWeb.Business;

namespace RexWeb.Models
{
    public class CampaignModel
    {
        public static CampaignModel FromEntity(Campaign entity)
        {
            return new CampaignModel()
            {
                Id = entity.Id,
                Name = entity.Name,
                Description = entity.ShortDescription
            };
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

    }
}