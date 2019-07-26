using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using System.Collections.Generic;
using RexWeb.Models;
using System.Linq;

namespace RexWeb.Controllers
{
    public class CatalogController : Controller
    {
        static IEnumerable<CampaignModel> Campaigns 
        {
            get
            {
                return Enumerable.Range(0, 250)
                    .Select(ign => new CampaignModel() 
                    {
                        Name = "Huracán Katrina",
                        Description = "El huracán Katrina fue uno de los más destructivos y el que causó más víctimas mortales de la temporada de huracanes en el Atlántico de 2005."
                    });
            }
        }

        public IActionResult Index()
        {
            return View(Campaigns);
        }
    }
}