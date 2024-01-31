using ClientApi.Handlers.Interfaces;
using ClientApi.Models;
using System.Collections.Immutable;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace ClientApi.Handlers
{
    public class CustomerHandler: ICustomerHandler
    {
        public CustomerHandler() { }

        public int GetCustomerCount() 
        {
            return GetCustomerList().Count();
        }

        public IList<CustomerModel> GetCustomerList()
        {
            using (StreamReader r = new StreamReader("SampleData/Customers.json"))
            {
                List<CustomerModel> customers = new List<CustomerModel>();

                string json = r.ReadToEnd();

                if (json != null)
                {
                    customers = JsonSerializer.Deserialize<List<CustomerModel>>(
                    json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
                }

                return customers;

            }
        }
    }
}
