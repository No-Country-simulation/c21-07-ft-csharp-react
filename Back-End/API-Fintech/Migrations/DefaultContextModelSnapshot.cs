﻿// <auto-generated />
using System;
using API_Fintech.Infraestructure.Data.Config.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API_Fintech.Migrations
{
    [DbContext(typeof(DefaultContext))]
    partial class DefaultContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("API_Fintech.Core.Entities.Transaction.Transaction", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<decimal>("Amount")
                        .HasColumnType("decimal(18,2)")
                        .HasColumnName("Amount");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2")
                        .HasColumnName("Date");

                    b.Property<long>("DestinationAccountId")
                        .HasColumnType("bigint")
                        .HasColumnName("DestinationAccountId");

                    b.Property<string>("Motivo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Motivo");

                    b.Property<long>("OriginAccountId")
                        .HasColumnType("bigint")
                        .HasColumnName("OriginAccountId");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Type");

                    b.HasKey("Id");

                    b.ToTable("Transactions", (string)null);

                    b.HasData(
                        new
                        {
                            Id = 1L,
                            Amount = 1000m,
                            Date = new DateTime(2024, 10, 30, 2, 9, 36, 669, DateTimeKind.Local).AddTicks(1594),
                            DestinationAccountId = 987654321L,
                            Motivo = "DepositoInicial",
                            OriginAccountId = 1234567890L,
                            Type = "Credito"
                        },
                        new
                        {
                            Id = 2L,
                            Amount = 20000m,
                            Date = new DateTime(2024, 10, 30, 2, 9, 36, 669, DateTimeKind.Local).AddTicks(1607),
                            DestinationAccountId = 123456789L,
                            Motivo = "DepositoInicial",
                            OriginAccountId = 1234567890L,
                            Type = "Credito"
                        },
                        new
                        {
                            Id = 3L,
                            Amount = 20000m,
                            Date = new DateTime(2024, 10, 30, 2, 9, 36, 669, DateTimeKind.Local).AddTicks(1609),
                            DestinationAccountId = 1234567890L,
                            Motivo = "DepositoInicial",
                            OriginAccountId = 123456789L,
                            Type = "Debito"
                        },
                        new
                        {
                            Id = 4L,
                            Amount = 20000m,
                            Date = new DateTime(2024, 10, 30, 2, 9, 36, 669, DateTimeKind.Local).AddTicks(1610),
                            DestinationAccountId = 1234567890L,
                            Motivo = "DepositoInicial",
                            OriginAccountId = 987654321L,
                            Type = "Debito"
                        });
                });

            modelBuilder.Entity("API_Fintech.Models.Authentication.Users.UserAuth", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PIN")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("Roles")
                        .IsRequired()
                        .HasMaxLength(1024)
                        .IsUnicode(false)
                        .HasColumnType("varchar(1024)");

                    b.HasKey("Id");

                    b.ToTable("UsersAuth", (string)null);

                    b.HasData(
                        new
                        {
                            Id = 1L,
                            Email = "testHugo@gmail.com",
                            FirstName = "Hugo",
                            LastName = "D",
                            PIN = "$2a$11$sPHFyUJjdU44B5EEvyZOy.Iq0rMynkdCkEqRCndMZO34SD2mNZYoK",
                            Password = "$2a$11$P9DlGTe2RRs1R5ptlydhoeDm9JncvTuEVNgrE5GhoiCPK9Zv0K.a6",
                            Roles = "[\"Admin, NormalUser\"]"
                        },
                        new
                        {
                            Id = 2L,
                            Email = "testAgustin@gmail.com",
                            FirstName = "Agustin",
                            LastName = "M",
                            PIN = "$2a$11$4U.gsgGS.TyCO6xzmJHmR.889QYmfOIJ960pP7HSBXMevp3Spz6WK",
                            Password = "$2a$11$.C5z6ci8gfBsES/m1mKpuuhddM.dE.tRpomH9h6FSGppvTus8.WRe",
                            Roles = "[\"Admin\",\"NormalUser\"]"
                        },
                        new
                        {
                            Id = 3L,
                            Email = "testTomas@gmail.com",
                            FirstName = "Tomas",
                            LastName = "C",
                            PIN = "$2a$11$F3MNkoj9xHirrSYgnAtvDuYqECPhAp8nkaqm5SUz8FzuiUPCfvRKu",
                            Password = "$2a$11$JA9ypNf3/ypCHyTfOVxCRO8V.MEf.c9TW2vzfaB7xOxNyzKmCWSTG",
                            Roles = "[\"Admin\",\"NormalUser\"]"
                        });
                });

            modelBuilder.Entity("API_Fintech.Models.Transaction.Account", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("Id"));

                    b.Property<long>("AccountNumber")
                        .HasColumnType("bigint")
                        .HasColumnName("AccountNumber");

                    b.Property<string>("AccountType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("AccountType");

                    b.Property<double>("Balance")
                        .HasColumnType("float")
                        .HasColumnName("Balance");

                    b.Property<long>("UserAuthId")
                        .HasColumnType("bigint")
                        .HasColumnName("UserAuthId");

                    b.HasKey("Id");

                    b.HasIndex("UserAuthId")
                        .IsUnique();

                    b.ToTable("Acounts", (string)null);

                    b.HasData(
                        new
                        {
                            Id = 1L,
                            AccountNumber = 123456789L,
                            AccountType = "Cuenta Ahorros",
                            Balance = 20000.0,
                            UserAuthId = 1L
                        },
                        new
                        {
                            Id = 2L,
                            AccountNumber = 987654321L,
                            AccountType = "Caja de Ahorros",
                            Balance = 20000.0,
                            UserAuthId = 2L
                        },
                        new
                        {
                            Id = 3L,
                            AccountNumber = 1234567890L,
                            AccountType = "Caja de Ahorros",
                            Balance = 1960000.0,
                            UserAuthId = 3L
                        });
                });

            modelBuilder.Entity("API_Fintech.Models.Transaction.Account", b =>
                {
                    b.HasOne("API_Fintech.Models.Authentication.Users.UserAuth", null)
                        .WithOne()
                        .HasForeignKey("API_Fintech.Models.Transaction.Account", "UserAuthId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
