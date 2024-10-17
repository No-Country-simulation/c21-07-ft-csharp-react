namespace API_Fintech.Models.Authentication.Users
{
	public class UserBank : EntityBase<long>
    {
        public long UserAuthId { get; set; }

        public int PIN { get; set; }

	}
}