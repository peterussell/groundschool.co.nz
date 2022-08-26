using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using GSNZ.Application.Interfaces;
using GSNZ.Domain.Entities;

namespace GSNZ.Api.Controllers;

[ApiController]
[Route("/exam")]
public class ExamController : ControllerBase
{
    private readonly ILogger<ExamController> _logger;
    private readonly IExamService _examService;

    public ExamController(ILogger<ExamController> logger, IExamService examService)
    {
        _logger = logger;
        _examService = examService;
    }

    [HttpGet("")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<Exam>))]
    public IActionResult Get()
    {
        List<Exam> exams = this._examService.GetAllExams();
        return Ok(exams);
    }
}
