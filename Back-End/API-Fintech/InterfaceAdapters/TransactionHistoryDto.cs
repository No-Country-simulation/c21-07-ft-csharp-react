namespace API_Fintech.InterfaceAdapters
{
    public class TransactionHistoryDto
    {
        public required long Id { get; set; }
        public required DateTime Date { get; set; }
        public required string Type { get; set; }

        public required double Amount { get; set; }

        public required string Name { get; set; }

    }
}
