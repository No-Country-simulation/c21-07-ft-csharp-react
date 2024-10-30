using API_Fintech.Models.Authentication;
using System;

namespace API_Fintech.Models.Authentication.Users
{
    public class UserAuth : EntityBase<long>
    {
        public required string Email { get; set; }
        public required string Password { get; set; }

        public required string PIN { get; set; }

        public required string FirstName { get; set; }

        public required string LastName { get; set; }

        public required string[] Roles { get; set; }

    }
}
