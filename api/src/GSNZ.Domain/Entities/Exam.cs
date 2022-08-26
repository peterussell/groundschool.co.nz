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
}