namespace Portfolio.Domain.Entities;

public sealed class Skill
{
    public Guid Id { get; set; }
    public string SkillName { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public int Proficiency { get; set; }
    public decimal YearsOfExperience { get; set; }
    public int DisplayOrder { get; set; }
}

