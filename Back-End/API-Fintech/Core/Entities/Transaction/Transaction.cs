using API_Fintech.Models.Authentication;

namespace API_Fintech.Core.Entities.Transaction
{
    public class Transaction : EntityBase<long>
    {
        public long OriginAccountId { get; set; }
        public long DestinationAccountId { get; set; }
        public decimal Amount { get; set; }
        public required string Type { get; set; }
        public DateTime Date { get; set; }

        public required string Motivo { get; set; }

    }
}
