using API_Fintech.Models.Authentication;

namespace API_Fintech.Models.Transaction
{
    public class Account : EntityBase<long>
    {
     
        public long UserAuthId { get; set; }
        public long AccountNumber { get; set; }
        public required string AccountType { get; set; }
        public double Balance { get; set; }

    }

}