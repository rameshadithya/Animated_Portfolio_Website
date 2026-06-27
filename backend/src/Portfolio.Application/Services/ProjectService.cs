using Portfolio.Application.DTOs;
using Portfolio.Domain.Entities;
using Portfolio.Domain.Interfaces;

namespace Portfolio.Application.Services;

public sealed class ProjectService(IRepository<Project> projects) : IProjectService
{
    public async Task<IReadOnlyList<ProjectDto>> GetProjectsAsync(CancellationToken cancellationToken = default)
    {
        var items = await projects.ListAsync(cancellationToken);

        return items
            .OrderBy(project => project.DisplayOrder)
            .Select(project => new ProjectDto(
                project.Id,
                project.Title,
                project.Description,
                project.TechStack,
                project.GithubUrl,
                project.DemoUrl,
                project.ImageUrl,
                project.DisplayOrder,
                project.IsFeatured))
            .ToList();
    }
}

