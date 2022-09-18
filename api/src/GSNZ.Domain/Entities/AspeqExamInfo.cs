namespace GSNZ.Domain.Entities;

public class AspeqExamInfo: ExamInfo
{
    public string AspeqExamName { get; private set; }
    public int DurationMinutes { get; private set; }
    public List<AllowedMaterial> AllowedMaterials { get; private set; }

    public AspeqExamInfo(string aspeqExamName, int durationMinutes)
    {
        this.AspeqExamName = aspeqExamName;
        this.DurationMinutes = durationMinutes;
        this.AllowedMaterials = new List<AllowedMaterial>();
    }
}