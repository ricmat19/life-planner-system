namespace API.DTOs
{
    public class MemberDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string ProfileImage { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public int Age { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string Plan { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime LastActive { get; set; }
        public DateTime EndDate { get; set; }
        public string Status { get; set; }
    }
}