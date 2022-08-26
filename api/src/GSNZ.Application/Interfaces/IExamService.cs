using GSNZ.Domain.Entities;

namespace GSNZ.Application.Interfaces;

public interface IExamService
{
    public List<Exam> GetAllExams();
}
