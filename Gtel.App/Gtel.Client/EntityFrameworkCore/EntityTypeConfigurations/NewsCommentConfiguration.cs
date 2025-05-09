using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Gtel.Client.Models;

namespace Gtel.Client.EntityFrameworkCore
{
    public class NewsCommentConfiguration : IEntityTypeConfiguration<NewsComment>
    {
        public void Configure(EntityTypeBuilder<NewsComment> builder)
        {
            builder.ToTable("NewsComments");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.Name).HasMaxLength(256);
            builder.Property(x => x.Email).HasMaxLength(256);
            builder.Property(x => x.Message).HasMaxLength(1024);
            builder.Property(x => x.ApprovedByUserName).HasMaxLength(256);
            builder.Property(x => x.DeletedByUserName).HasMaxLength(256);
            builder.Property(x => x.ModifiedByUserName).HasMaxLength(256);

            builder.HasIndex(e => e.NewsUmbracoKey);
            builder.HasIndex(e => e.Name);
            builder.HasIndex(e => e.Email);
            builder.HasIndex(e => e.IsApproved);
            builder.HasIndex(e => e.IsDeleted);
            builder.HasIndex(e => e.ApprovedDate);
            builder.HasIndex(e => e.ApprovedByUserId);
            builder.HasIndex(e => e.DeletedDate);
            builder.HasIndex(e => e.DeletedByUserId);
            builder.HasIndex(e => e.CreationDate);
            builder.HasIndex(e => e.ModificationDate);
            builder.HasIndex(e => e.ModifiedByUserId);

            builder.HasQueryFilter(e => !e.IsDeleted);
        }
    }
}
