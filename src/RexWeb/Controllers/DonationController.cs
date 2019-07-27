using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace RexWeb.Controllers
{
    public class DonationController : Controller
    {
        public IActionResult Create()
        {
            return View();
        }
    }
}