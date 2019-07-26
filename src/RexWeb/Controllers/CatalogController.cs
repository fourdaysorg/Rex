using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace MvcMovie.Controllers
{
    public class CatalogController : Controller
    {
        // 
        // GET: /Catalog/

        public IActionResult Index()
        {
            return View();
        }
    }
}