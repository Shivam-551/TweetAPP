﻿using AutoMapper;
using Microsoft.Extensions.Options;
using TweetApp.Repository.Interfaces;
using TweetApp.Service.Services.Interfaces;

namespace TweetApp.Service.Services
{
    public class Services : IServices
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public IUserService UserService { get; private set; }


        public ITweetService TweetService { get; private set; }

        public Services(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            UserService = new UserService(_unitOfWork, _mapper);
            TweetService = new TweetService(_unitOfWork, _mapper);
        }
    }
}
