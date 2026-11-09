using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LavonuRojus.Migrations
{
    /// <inheritdoc />
    public partial class CorrectServiceAndUserDateColumns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Nuotrauka",
                table: "Paslaugos");

            migrationBuilder.AlterColumn<DateOnly>(
                name: "SukurimoData",
                table: "Naudotojai",
                type: "date",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone");

            migrationBuilder.AlterColumn<DateOnly>(
                name: "PaskutinioPrisijungimoData",
                table: "Naudotojai",
                type: "date",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone",
                oldNullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Nuotrauka",
                table: "Paslaugos",
                type: "text",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "SukurimoData",
                table: "Naudotojai",
                type: "timestamp with time zone",
                nullable: false,
                oldClrType: typeof(DateOnly),
                oldType: "date");

            migrationBuilder.AlterColumn<DateTime>(
                name: "PaskutinioPrisijungimoData",
                table: "Naudotojai",
                type: "timestamp with time zone",
                nullable: true,
                oldClrType: typeof(DateOnly),
                oldType: "date",
                oldNullable: true);
        }
    }
}
