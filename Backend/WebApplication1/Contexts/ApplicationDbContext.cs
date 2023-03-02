using Microsoft.EntityFrameworkCore;
using TweetApp.Repository.Entities;

#nullable disable
namespace TweetApp.Repository.Contexts
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
        { }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        { }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=TweetApp;Trusted_Connection=true;MultipleActiveResultSets=true");
        //}
        public DbSet<User> Users { get; set; }
        public DbSet<Tweet> Tweets { get; set; }
    }
}
