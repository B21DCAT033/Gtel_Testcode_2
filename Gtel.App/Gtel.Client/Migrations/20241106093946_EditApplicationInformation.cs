using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Gtel.Client.Migrations
{
    /// <inheritdoc />
    public partial class EditApplicationInformation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Address",
                table: "ApplicationInformations",
                type: "nvarchar(512)",
                maxLength: 512,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<int>(
                name: "FileId",
                table: "ApplicationInformations",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "FileKey",
                table: "ApplicationInformations",
                type: "uniqueidentifier",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FileId",
                table: "ApplicationInformations");

            migrationBuilder.DropColumn(
                name: "FileKey",
                table: "ApplicationInformations");

            migrationBuilder.AlterColumn<string>(
                name: "Address",
                table: "ApplicationInformations",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(512)",
                oldMaxLength: 512);
        }
    }
}
