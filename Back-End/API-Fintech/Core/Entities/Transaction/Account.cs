namespace API_Fintech.Models.Transaction
{
    public class Account
    {
        public long Id { get; set; }
        public long UserId { get; set; }
        public long AccountNumber { get; set; }
        public string AccountType { get; set; }
        public decimal Balance { get; set; }
        public DateTime DateOfCreation { get; set; }

    }
}