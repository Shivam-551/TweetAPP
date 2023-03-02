using Microsoft.AspNetCore.Mvc;
using TweetApp.Model.Dto;
using TweetApp.Service.Services.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TweetAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class tweetsController : ControllerBase
    {
        private readonly IServices _services;

        public tweetsController(IServices services)
        {
            _services = services;
        }
        // GET: api/<tweets>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<tweets>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<tweets>
        [HttpGet]
        [Route("register")]
        public async Task<UserDetailsDto> Register(UserDto userDto)
        {
            if (!await _services.UserService.IsUniqueUser(userDto.Email))
            {
                var user = await _services.UserService.Register(userDto);
                return user;
            }
            return null;
        }

        // PUT api/<tweets>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<tweets>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
