using Portfolio.Application.DTOs;

namespace Portfolio.Application.Services;

public interface IProjectService
{
    Task<IReadOnlyList<ProjectDto>> GetProjectsAsync(CancellationToken cancellationToken = default);
}

