namespace API.DTOs
{
    public class MemberUpdateDto
    {
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
        public string Status { get; set; }
    }
}