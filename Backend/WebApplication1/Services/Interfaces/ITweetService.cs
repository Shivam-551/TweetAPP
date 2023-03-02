using TweetApp.Model.Dto;
using TweetApp.Repository.Entities;

namespace TweetApp.Service.Services.Interfaces
{
    public interface ITweetService
    {
        Task<TweetDetailsDto> PostTweet(string userDto,string username);
        Task<IEnumerable<TweetDetailsDto>> GetAllTweets();
        Task<IEnumerable<TweetDetailsDto>> GetTweetsByUsername(string username);
    }
}
