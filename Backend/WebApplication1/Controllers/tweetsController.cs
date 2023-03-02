using Microsoft.AspNetCore.Mvc;
using TweetApp.Model.Dto;
using TweetApp.Service.Services;
using TweetApp.Service.Services.Interfaces;
using System.Web.Cors;
namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class tweetsController : ControllerBase
    {
        
        private readonly IServices _services;
        

        public tweetsController(IServices services)
        {
            
            _services = services;
        }


        [HttpGet]
        [Route("login")]
        public async Task<object> Login(string username, string password)
        {
            
            var user = await _services.UserService.Authenticate(username, password);

            return user;
        }
        [HttpGet]
        [Route("viewalltweets")]
        public async Task<object> ViewAllTweets()
        {
            var tweets = await _services.TweetService.GetAllTweets();
            return tweets;
        }
        [HttpGet]
        [Route("viewmytweets")]
        public async Task<IEnumerable<TweetDetailsDto>> ViewMyTweets(string username)
        {
            var tweets = await _services.TweetService.GetTweetsByUsername(username);
            return tweets;
        }
        [HttpGet]
        [Route("register")]
        public async Task<object> Register(UserDto userDto)
        {
            //if (!await _services.UserService.IsUniqueUser(userDto.Email))
            //{
            //    var user = await _services.UserService.Register(userDto);
            //    return user;
            //}
            var user = await _services.UserService.Register(userDto);
            return user;

        }
        [HttpGet]
        [Route("add")]
        public async Task<TweetDetailsDto> PostATweet(string tweetDto, string username)
        {
            //var user = await _services.UserService.FindByUsername(username);
            //tweetDto.UserId = user.LoginId;

            var tweet = await _services.TweetService.PostTweet(tweetDto,username);

            return tweet;
        }
        [HttpGet]
        [Route("reset")]
        public async Task<bool> ResetPassword(string username, string password)
        {
            var status = await _services.UserService.ResetPassword(username, password);
            return status;
        }
        [HttpGet]
        [Route("logout")]
        public void LogOut(string username)
        {
            _services.UserService.LogOut(username);
        }
    }
}
    
