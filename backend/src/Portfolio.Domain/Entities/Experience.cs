namespace Portfolio.Domain.Entities;

public sealed class Experience
{
    public Guid Id { get; set; }
    public string CompanyName { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public DateOnly StartDate { get; set; }
    public DateOnly? EndDate { get; set; }
    public string Description { get; set; } = string.Empty;
    public string TechnologiesUsed { get; set; } = string.Empty;
}

