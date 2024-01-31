using ClientApi.Handlers.Interfaces;
using ClientApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ClientApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly ILogger<CustomerController> _logger;
        private readonly ICustomerHandler _customerHandler;

        public CustomerController(ILogger<CustomerController> logger, ICustomerHandler customerHandler)
        {
            _logger = logger;
            _customerHandler = customerHandler;
        }

        [HttpGet("GetCustomerCount")]

        public int GetCustomerCount()
        {
            return _customerHandler.GetCustomerCount();
        }

        [HttpGet("GetCustomerList")]
        public IList<CustomerModel> GetCustomerList()
        {
            return _customerHandler.GetCustomerList();
        }
    }
}
