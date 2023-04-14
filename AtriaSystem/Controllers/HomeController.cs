using AtriaSystem.DAL;
using AtriaSystem.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace AtriaSystem.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Pagina1()
        {
            return View();
        }

        [Route("Home/Pagina2/{amountProfile}")]
        public async Task<IActionResult> Pagina2(bool amountProfile)
        {
            var model = await ApiServiceDAL.GetUsers(amountProfile);

            return View(model);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}