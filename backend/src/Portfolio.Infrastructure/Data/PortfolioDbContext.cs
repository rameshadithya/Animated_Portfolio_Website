using Microsoft.EntityFrameworkCore;
using Portfolio.Domain.Entities;

namespace Portfolio.Infrastructure.Data;

public sealed class PortfolioDbContext(DbContextOptions<PortfolioDbContext> options) : DbContext(options)
{
    public DbSet<User> Users => Set<User>();
    public DbSet<Project> Projects => Set<Project>();
    public DbSet<Skill> Skills => Set<Skill>();
    public DbSet<Experience> Experience => Set<Experience>();
    public DbSet<Blog> Blogs => Set<Blog>();
    public DbSet<Profile> Profiles => Set<Profile>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Blog>().HasIndex(blog => blog.Slug).IsUnique();
        modelBuilder.Entity<Project>().Property(project => project.Title).HasMaxLength(160);
        modelBuilder.Entity<Skill>().Property(skill => skill.SkillName).HasMaxLength(120);
    }
}

