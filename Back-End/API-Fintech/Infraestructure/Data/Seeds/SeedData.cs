using API_Fintech.Core.Entities.Transaction;
using API_Fintech.Models.Authentication.Users;
using API_Fintech.Models.Transaction;
using Microsoft.EntityFrameworkCore;
using System.Net.NetworkInformation;

namespace API_Fintech.Infraestructure.Data.Seeds
{
    public class SeedData
    {

        public static void Seeds(ModelBuilder modelBuilder)
        {
            SeedUsers(modelBuilder);
            SeedAccounts(modelBuilder);
            SeedTransactions(modelBuilder);
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
                     PIN = BCrypt.Net.BCrypt.HashPassword("123456"),
                     FirstName = "Hugo",
                     LastName = "D",
                     Roles = ["Admin, NormalUser"],
                 },
                new UserAuth
                {
                    Id = 2,
                    Email = "testAgustin@gmail.com",
                    Password = BCrypt.Net.BCrypt.HashPassword("12345678"),
                    PIN = BCrypt.Net.BCrypt.HashPassword("123456"),
                    FirstName = "Agustin",
                    LastName = "M",
                    Roles = ["Admin", "NormalUser"],
                },
                new UserAuth
                {
                    Id = 3,
                    Email = "testTomas@gmail.com",
                    Password = BCrypt.Net.BCrypt.HashPassword("12345678"),
                    PIN = BCrypt.Net.BCrypt.HashPassword("123456"),
                    FirstName = "Tomas",
                    LastName = "C",
                    Roles = ["Admin", "NormalUser"],
                }
            );




        }

        public static void SeedAccounts(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>().HasData
            (

                new Account
                {
                    Id = 1,
                    Balance = 20000,
                    AccountNumber = 123456789,
                    AccountType = "Cuenta Ahorros",
                    UserAuthId = 1,
                },
                new Account
                {
                    Id = 2,
                    Balance = 20000,
                    AccountNumber = 987654321,
                    AccountType = "Caja de Ahorros",
                    UserAuthId = 2,
                },
                new Account
                {
                    Id = 3,
                    Balance = 1960000,
                    AccountNumber = 1234567890,
                    AccountType = "Caja de Ahorros",
                    UserAuthId = 3,
                }

            );

        }

        public static void SeedTransactions(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Transaction>().HasData
            (
                new Transaction
                {
                    Id = 1,
                    Amount = 1000,
                    Date = DateTime.Now,
                    Motivo = "DepositoInicial",
                    DestinationAccountId = 987654321,
                    OriginAccountId = 1234567890,
                    Type = "Credito",
                },
                new Transaction
                {
                    Id = 2,
                    Amount = 20000,
                    Date = DateTime.Now,
                    Motivo = "DepositoInicial",
                    DestinationAccountId = 123456789,
                    OriginAccountId = 1234567890,
                    Type = "Credito",

                },
                new Transaction
                {
                    Id = 3,
                    Amount = 20000,
                    Date = DateTime.Now,
                    Motivo = "DepositoInicial",
                    DestinationAccountId = 1234567890,
                    OriginAccountId = 123456789,
                    Type = "Debito",
                },
                new Transaction
                {
                    Id = 4,
                    Amount = 20000,
                    Date = DateTime.Now,
                    Motivo = "DepositoInicial",
                    DestinationAccountId = 1234567890,
                    OriginAccountId = 987654321,
                    Type = "Debito",

                }
            );
        }
    }
}