namespace API_Fintech.Models.Notification
{
    public class Message
    {
        public long Id { get; set; }
        public string Title { get; set; }

        public string Body { get; set; }

        public DateTime DateOfCreation { get; set; }

        public string Sender { get; set; }

        public string Receiver { get; set; }
    }
}

