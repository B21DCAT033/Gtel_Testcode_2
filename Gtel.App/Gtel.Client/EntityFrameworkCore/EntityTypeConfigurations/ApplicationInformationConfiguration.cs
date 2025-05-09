using Gtel.Client.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace Gtel.Client.EntityFrameworkCore.EntityTypeConfigurations
{
    public class ApplicationInformationConfiguration : IEntityTypeConfiguration<ApplicationInformation>
    {
        public void Configure(EntityTypeBuilder<ApplicationInformation> builder)
        {
            builder.ToTable("ApplicationInformations");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.FullName).HasMaxLength(256);
            builder.Property(x => x.Email).HasMaxLength(256);
            builder.Property(x => x.Telephone).HasMaxLength(32);
            builder.Property(x => x.Address).HasMaxLength(512);
            builder.Property(x => x.Message).HasMaxLength(1024);
            builder.Property(x => x.FileType).HasMaxLength(32);
            builder.Property(x => x.FileContentType).HasMaxLength(256);
            builder.Property(x => x.FileName).HasMaxLength(256);
            builder.Property(x => x.FileUrl).HasMaxLength(512);
            builder.Property(x => x.DeletedByUserName).HasMaxLength(256);
            builder.Property(x => x.ModifiedByUserName).HasMaxLength(256);

            builder.HasIndex(e => e.JobPostingKey);
            builder.HasIndex(e => e.FullName);
            builder.HasIndex(e => e.Email);
            builder.HasIndex(e => e.Telephone);
            builder.HasIndex(e => e.IsDeleted);
            builder.HasIndex(e => e.DeletedDate);
            builder.HasIndex(e => e.DeletedByUserId);
            builder.HasIndex(e => e.CreationDate);
            builder.HasIndex(e => e.ModificationDate);
            builder.HasIndex(e => e.ModifiedByUserId);

            builder.HasQueryFilter(e => !e.IsDeleted);
        }
    }
}
