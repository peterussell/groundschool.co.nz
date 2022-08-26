using GSNZ.Domain.Entities;
using GSNZ.Application.Interfaces;

namespace GSNZ.Api.Services;

public class ExamService: IExamService
{
    public List<Exam> GetAllExams()
    {
        var exams = new List<Exam>();
        return exams;
    }
}