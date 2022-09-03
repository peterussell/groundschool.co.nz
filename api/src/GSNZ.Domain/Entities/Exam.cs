using GSNZ.Domain.Enums;

namespace GSNZ.Domain.Entities;

public class Exam
{
    public string Id { get; private set; }
    public string Name { get; private set; }
    public string Slug { get; private set ; }
    public LicenseType LicenseType { get; private set; }
    public AspeqExamInfo AspeqExamInfo { get; private set; }
    public ExamInfo ExamInfo { get; private set; }

    public Exam(string id, string name, string slug, LicenseType licenseType,
        AspeqExamInfo aspeqExamInfo, ExamInfo examInfo)
    {
        this.Id = id;
        this.Name = id;
        this.Slug = slug;
        this.LicenseType = licenseType;
        this.AspeqExamInfo = aspeqExamInfo;
        this.ExamInfo = examInfo;
    }
}