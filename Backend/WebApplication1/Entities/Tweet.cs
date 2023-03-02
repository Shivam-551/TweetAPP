using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable
namespace TweetApp.Repository.Entities
{
    public class Tweet
    {
        [Key]
        
        public int id { get; set; }

        //[MaxLength(50)]
        //public string Tag { get; set; }

        public string UserName { get; set; }

        [MaxLength(144)]
        public string TweetString { get; set; }

        //public int UserId { get; set; }
        //[ForeignKey("UserId")]
        //public User User { get; set; }
    }
}
