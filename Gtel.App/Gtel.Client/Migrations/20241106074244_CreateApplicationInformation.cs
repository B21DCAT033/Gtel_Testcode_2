using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Gtel.Client.Migrations
{
    /// <inheritdoc />
    public partial class CreateApplicationInformation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "DeletedBy",
                table: "NewsComments",
                type: "nvarchar(256)",
                maxLength: 256,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedDate",
                table: "NewsComments",
                type: "datetime2",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "ApplicationInformations",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    JobPostingKey = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FullName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: false),
                    Telephone = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Message = table.Column<string>(type: "nvarchar(1024)", maxLength: 1024, nullable: true),
                    FileUrl = table.Column<string>(type: "nvarchar(512)", maxLength: 512, nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
                    FileContentType = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    DeletedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    DeletedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    CreationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ModifiedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ModificationDate = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApplicationInformations", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_NewsComments_DeletedDate",
                table: "NewsComments",
                column: "DeletedDate");

            migrationBuilder.CreateIndex(
                name: "IX_NewsComments_IsDeleted",
                table: "NewsComments",
                column: "IsDeleted");

            migrationBuilder.CreateIndex(
                name: "IX_NewsComments_ModificationDate",
                table: "NewsComments",
                column: "ModificationDate");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationInformations_CreationDate",
                table: "ApplicationInformations",
                column: "CreationDate");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationInformations_DeletedDate",
                table: "ApplicationInformations",
                column: "DeletedDate");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationInformations_Email",
                table: "ApplicationInformations",
                column: "Email");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationInformations_FullName",
                table: "ApplicationInformations",
                column: "FullName");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationInformations_IsDeleted",
                table: "ApplicationInformations",
                column: "IsDeleted");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationInformations_JobPostingKey",
                table: "ApplicationInformations",
                column: "JobPostingKey");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationInformations_ModificationDate",
                table: "ApplicationInformations",
                column: "ModificationDate");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationInformations_Telephone",
                table: "ApplicationInformations",
                column: "Telephone");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ApplicationInformations");

            migrationBuilder.DropIndex(
                name: "IX_NewsComments_DeletedDate",
                table: "NewsComments");

            migrationBuilder.DropIndex(
                name: "IX_NewsComments_IsDeleted",
                table: "NewsComments");

            migrationBuilder.DropIndex(
                name: "IX_NewsComments_ModificationDate",
                table: "NewsComments");

            migrationBuilder.DropColumn(
                name: "DeletedDate",
                table: "NewsComments");

            migrationBuilder.AlterColumn<string>(
                name: "DeletedBy",
                table: "NewsComments",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(256)",
                oldMaxLength: 256,
                oldNullable: true);
        }
    }
}
