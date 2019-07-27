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
        private CampaignRepository campaigns = new CampaignRepository();
        private DonationRepository donations = new DonationRepository();

        [HttpGet]
        public IActionResult Index()
        {
            var models = donations.GetAll().Select(DonationModel.FromEntity);
            return View(models);
        }

        [HttpGet]
        public IActionResult Create(int id)
        {
            var campaign = campaigns.GetById(id);
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
            var entity = new Donation();
            entity.Description = model.Description;
            entity.Campaign = campaigns.GetById(model.CampaignId);
            donations.Add(entity);
            return RedirectToAction("Index");
        }
    }
}