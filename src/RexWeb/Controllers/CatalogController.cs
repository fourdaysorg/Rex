using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using System.Collections.Generic;
using RexWeb.Models;
using System.Linq;
using RexWeb.Business;

namespace RexWeb.Controllers
{
    public class CatalogController : Controller
    {
        private CampaignRepository repo = new CampaignRepository();

        public IActionResult Index()
        {
            var models = repo.GetAll().Select(CampaignModel.FromEntity);
            return View(models);
        }

        public IActionResult Details(int id)
        {
            var model = CampaignModel.FromEntity(repo.GetById(id));
            return View(model);
        }
    }
}