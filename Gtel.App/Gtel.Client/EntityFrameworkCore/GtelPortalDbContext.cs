using Gtel.Client.EntityFrameworkCore.EntityTypeConfigurations;
using Gtel.Client.Models;
using Microsoft.EntityFrameworkCore;

namespace Gtel.Client.EntityFrameworkCore
{
    public class GtelPortalDbContext : DbContext
    {
        public GtelPortalDbContext(DbContextOptions<GtelPortalDbContext> options) : base(options)
        {
        }

        public required DbSet<NewsComment> NewsComments { get; set; }
        public required DbSet<ApplicationInformation> ApplicationInformations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new NewsCommentConfiguration());
            modelBuilder.ApplyConfiguration(new ApplicationInformationConfiguration());
        }
    }
}
