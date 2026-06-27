namespace Portfolio.Application.DTOs;

public sealed record ProjectDto(
    Guid Id,
    string Title,
    string Description,
    string TechStack,
    string? GithubUrl,
    string? DemoUrl,
    string? ImageUrl,
    int DisplayOrder,
    bool IsFeatured);

