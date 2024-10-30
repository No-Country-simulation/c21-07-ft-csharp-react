using API_Fintech.Models.Authentication;

namespace API_Fintech.Models.Authentication.Users
{
    public class UserData : EntityBase<long>
    {
        public long UserAuthId { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int DNI { get; set; }

    }
}
