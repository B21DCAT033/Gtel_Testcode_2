using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Gtel.Client.Migrations
{
    /// <inheritdoc />
    public partial class CreateNewsComments : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "NewsComments",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NewsUmbracoKey = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: false),
                    Message = table.Column<string>(type: "nvarchar(1024)", maxLength: 1024, nullable: false),
                    IsApproved = table.Column<bool>(type: "bit", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    DeletedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ApprovedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ApprovedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    CreationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ModifiedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ModificationDate = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewsComments", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_NewsComments_ApprovedDate",
                table: "NewsComments",
                column: "ApprovedDate");

            migrationBuilder.CreateIndex(
                name: "IX_NewsComments_CreationDate",
                table: "NewsComments",
                column: "CreationDate");

            migrationBuilder.CreateIndex(
                name: "IX_NewsComments_Email",
                table: "NewsComments",
                column: "Email");

            migrationBuilder.CreateIndex(
                name: "IX_NewsComments_IsApproved",
                table: "NewsComments",
                column: "IsApproved");

            migrationBuilder.CreateIndex(
                name: "IX_NewsComments_Name",
                table: "NewsComments",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_NewsComments_NewsUmbracoKey",
                table: "NewsComments",
                column: "NewsUmbracoKey");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NewsComments");
        }
    }
}
