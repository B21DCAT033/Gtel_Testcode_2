using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Gtel.Client.Migrations
{
    /// <inheritdoc />
    public partial class AdditionDeletedUserIdAndApprovedUserId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ModifiedBy",
                table: "NewsComments",
                newName: "ModifiedByUserName");

            migrationBuilder.RenameColumn(
                name: "DeletedBy",
                table: "NewsComments",
                newName: "DeletedByUserName");

            migrationBuilder.RenameColumn(
                name: "ApprovedBy",
                table: "NewsComments",
                newName: "ApprovedByUserName");

            migrationBuilder.RenameColumn(
                name: "ModifiedBy",
                table: "ApplicationInformations",
                newName: "ModifiedByUserName");

            migrationBuilder.RenameColumn(
                name: "DeletedBy",
                table: "ApplicationInformations",
                newName: "DeletedByUserName");

            migrationBuilder.AddColumn<int>(
                name: "ApprovedByUserId",
                table: "NewsComments",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DeletedByUserId",
                table: "NewsComments",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ModifiedByUserId",
                table: "NewsComments",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DeletedByUserId",
                table: "ApplicationInformations",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ModifiedByUserId",
                table: "ApplicationInformations",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_NewsComments_ApprovedByUserId",
                table: "NewsComments",
                column: "ApprovedByUserId");

            migrationBuilder.CreateIndex(
                name: "IX_NewsComments_DeletedByUserId",
                table: "NewsComments",
                column: "DeletedByUserId");

            migrationBuilder.CreateIndex(
                name: "IX_NewsComments_ModifiedByUserId",
                table: "NewsComments",
                column: "ModifiedByUserId");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationInformations_DeletedByUserId",
                table: "ApplicationInformations",
                column: "DeletedByUserId");

            migrationBuilder.CreateIndex(
                name: "IX_ApplicationInformations_ModifiedByUserId",
                table: "ApplicationInformations",
                column: "ModifiedByUserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_NewsComments_ApprovedByUserId",
                table: "NewsComments");

            migrationBuilder.DropIndex(
                name: "IX_NewsComments_DeletedByUserId",
                table: "NewsComments");

            migrationBuilder.DropIndex(
                name: "IX_NewsComments_ModifiedByUserId",
                table: "NewsComments");

            migrationBuilder.DropIndex(
                name: "IX_ApplicationInformations_DeletedByUserId",
                table: "ApplicationInformations");

            migrationBuilder.DropIndex(
                name: "IX_ApplicationInformations_ModifiedByUserId",
                table: "ApplicationInformations");

            migrationBuilder.DropColumn(
                name: "ApprovedByUserId",
                table: "NewsComments");

            migrationBuilder.DropColumn(
                name: "DeletedByUserId",
                table: "NewsComments");

            migrationBuilder.DropColumn(
                name: "ModifiedByUserId",
                table: "NewsComments");

            migrationBuilder.DropColumn(
                name: "DeletedByUserId",
                table: "ApplicationInformations");

            migrationBuilder.DropColumn(
                name: "ModifiedByUserId",
                table: "ApplicationInformations");

            migrationBuilder.RenameColumn(
                name: "ModifiedByUserName",
                table: "NewsComments",
                newName: "ModifiedBy");

            migrationBuilder.RenameColumn(
                name: "DeletedByUserName",
                table: "NewsComments",
                newName: "DeletedBy");

            migrationBuilder.RenameColumn(
                name: "ApprovedByUserName",
                table: "NewsComments",
                newName: "ApprovedBy");

            migrationBuilder.RenameColumn(
                name: "ModifiedByUserName",
                table: "ApplicationInformations",
                newName: "ModifiedBy");

            migrationBuilder.RenameColumn(
                name: "DeletedByUserName",
                table: "ApplicationInformations",
                newName: "DeletedBy");
        }
    }
}
