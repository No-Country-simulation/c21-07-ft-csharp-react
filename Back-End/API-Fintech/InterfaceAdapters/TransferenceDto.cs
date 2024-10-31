namespace API_Fintech.InterfaceAdapters
{
    public class TransferenceDto
    {

        public required long DestinationAccountNumber { get; set; }
        public required double Amount { get; set; }
        public required int PIN { get; set; }
 
        public required string Motivo { get; set; }

    }
}
