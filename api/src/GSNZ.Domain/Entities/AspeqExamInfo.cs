namespace GSNZ.Domain.Entities;

public class AspeqExamInfo: ExamInfo
{
    public string AspecExamName { get; private set; }
    public int DurationMinutes { get; private set; }
    public List<AllowedMaterial> AllowedMaterials { get; private set; }
}