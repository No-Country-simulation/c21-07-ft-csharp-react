namespace API_Fintech.InterfaceAdapters
{
    public class RegisterDto
    {

        public required string Email { get; set; }
        public required string Password { get; set; }


        public required string FirstName { get; set; }

        public required string LastName { get; set; }

        public required int PIN { get; set; }

    }
}
