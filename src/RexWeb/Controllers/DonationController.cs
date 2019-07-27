using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RexWeb.Business;
using RexWeb.Models;

namespace RexWeb.Controllers
{
    public class DonationController : Controller
    {
        private CampaignRepository campaignRepository = new CampaignRepository();

        [HttpGet]
        public IActionResult Create(int id)
        {
            var campaign = campaignRepository.GetById(id);
            var model = new DonationModel();
            model.CampaignId = campaign.Id;
            model.CampaignName = campaign.Name;
            return View(model);
        }

        [HttpPost]
        public IActionResult Create(DonationModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }


            return View(model);
        }
    }
}