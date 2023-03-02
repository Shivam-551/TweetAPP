using Microsoft.EntityFrameworkCore;
using TweetApp.Repository.Contexts;
using TweetApp.Repository.Interfaces;
using TweetApp.Repository.Repositories;
using TweetApp.Service.Mapper;
using TweetApp.Service.Services;
using TweetApp.Service.Services.Interfaces;


var builder = WebApplication.CreateBuilder(args);

//builder.Services.AddCors(options =>
//{
//    options.AddDefaultPolicy(
//                      policy =>
//                      {
//                          policy.WithOrigins("http://localhost:3000",
//                                              "http://localhost:15930");
//                      });
//});

// Add services to the container.
IConfiguration configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetParent(AppContext.BaseDirectory).FullName)
                .AddJsonFile("appsettings.json").Build();

builder.Services.AddSingleton<IConfiguration>(configuration);
builder.Services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddAutoMapper(typeof(Mappings));
builder.Services.AddControllers();
builder.Services.AddTransient<IUnitOfWork, UnitOfWork>();
builder.Services.AddTransient<IServices, Services>();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseAuthorization();
app.UseCors(options=>options.SetIsOriginAllowed(x=>_=true).AllowAnyMethod().AllowAnyHeader().AllowCredentials());
app.MapControllers();

app.Run();
