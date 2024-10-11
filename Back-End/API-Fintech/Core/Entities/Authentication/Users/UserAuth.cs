using API_Fintech.Models.Authentication;
using System;

namespace API_Fintech.Models.Authentication.Users
{
    public class UserAuth : EntityBase<long>
    {
        public string Email { get; set; }
        public string Password { get; set; }

        public string[] Roles { get; set; }

    }
}
