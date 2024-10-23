using API_Fintech.Models.Authentication.Users;
using Microsoft.EntityFrameworkCore;

namespace API_Fintech.Infraestructure.Data.Seeds
{
    public class SeedData
    {

        public static void Seeds(ModelBuilder modelBuilder)
        {
            SeedUsers(modelBuilder);
        }
        public static void SeedUsers(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserAuth>().HasData
            (
                 new UserAuth
                 {
                     Id = 1,
                     Email = "testHugo@gmail.com",
                     Password = BCrypt.Net.BCrypt.HashPassword("12345678"),
                     Roles = ["Admin, NormalUser"],
                 },
                new UserAuth
                {
                    Id = 2,
                    Email = "testAgustin@gmail.com",
                    Password = BCrypt.Net.BCrypt.HashPassword("12345678"),
                    Roles = ["Admin", "NormalUser"],
                }
            );


        }
    }
}