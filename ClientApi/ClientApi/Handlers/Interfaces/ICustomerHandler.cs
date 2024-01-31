using ClientApi.Models;

namespace ClientApi.Handlers.Interfaces
{
    public interface ICustomerHandler
    {
        int GetCustomerCount();
        IList<CustomerModel> GetCustomerList();
    }
}
