using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Email { get; set; }
        [Required]
        [StringLength(12, MinimumLength = 8)]
        public string Password { get; set; }

    }
}