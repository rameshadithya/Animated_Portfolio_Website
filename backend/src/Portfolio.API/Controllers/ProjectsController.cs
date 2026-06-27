using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Application.DTOs;
using Portfolio.Application.Services;

namespace Portfolio.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class ProjectsController(IProjectService projects) : ControllerBase
{
    [HttpGet]
    [AllowAnonymous]
    public async Task<ActionResult<IReadOnlyList<ProjectDto>>> GetProjects(CancellationToken cancellationToken)
    {
        var result = await projects.GetProjectsAsync(cancellationToken);
        return Ok(result);
    }

    [HttpGet("{id:guid}")]
    [AllowAnonymous]
    public ActionResult GetProject(Guid id)
    {
        return Ok(new { id, status = "Endpoint contract reserved for project details." });
    }

    [HttpPost]
    [Authorize]
    public ActionResult CreateProject()
    {
        return Accepted(new { status = "Create project endpoint reserved for admin CMS." });
    }

    [HttpPut("{id:guid}")]
    [Authorize]
    public ActionResult UpdateProject(Guid id)
    {
        return Accepted(new { id, status = "Update project endpoint reserved for admin CMS." });
    }

    [HttpDelete("{id:guid}")]
    [Authorize]
    public ActionResult DeleteProject(Guid id)
    {
        return Accepted(new { id, status = "Delete project endpoint reserved for admin CMS." });
    }
}

