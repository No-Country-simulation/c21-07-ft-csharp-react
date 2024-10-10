using API_Fintech.Models.Authentication;

public class UserData : UserBase
{
    private long userAuthId { get; set; }
    private string FirstName { get; set; }
    private string LastName { get; set; }
    private string Email { get; set; }
    private string PhoneNumber { get; set; }
    private string Address { get; set; }
    private string City { get; set; }
    private string State { get; set; }
    private int DNI { get; set; }

}