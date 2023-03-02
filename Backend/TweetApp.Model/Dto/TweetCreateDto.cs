using System.ComponentModel.DataAnnotations;
#nullable disable

namespace TweetApp.Model.Dto
{
    public class TweetCreateDto
    {
        public int id { get; set; } 
        public string UserName { get; set; }    
        [MaxLength(144)]
        [Required]
        public string  TweetString{ get; set; }

       

    }
}
