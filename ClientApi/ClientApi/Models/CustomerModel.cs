using System.Text.Json.Serialization;

namespace ClientApi.Models
{
    public class CustomerModel
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }
        [JsonPropertyName("firstName")]
        public string? FirstName { get; set; }
        [JsonPropertyName("lastName")]
        public string? LastName { get; set; }
        [JsonPropertyName("email")]
        public string? Email { get; set; }
        [JsonPropertyName("createdDateTime")]
        public string? CreatedDateTime { get; set; }
        [JsonPropertyName("updatedDateTime")]
        public string? UpdatedDateTime { get; set; }
    }
}
