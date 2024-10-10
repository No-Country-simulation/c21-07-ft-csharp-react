using API_Fintech.Models.Authentication;
using System;


public class UserAuth : UserBase
{

    private  string Email { get; set; }
    private string Password { get; set; }

    private string[] Roles { get; set; }

}
