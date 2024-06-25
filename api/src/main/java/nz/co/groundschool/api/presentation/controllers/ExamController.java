package nz.co.groundschool.api.presentation.controllers;

import nz.co.groundschool.api.application.exceptions.ExamNotFoundException;
import nz.co.groundschool.api.application.services.ExamService;
import nz.co.groundschool.api.application.services.IExamService;
import nz.co.groundschool.api.domain.entities.Exam;
import nz.co.groundschool.api.infrastructure.entities.JpaQuestion;
import nz.co.groundschool.api.presentation.dto.ExamRestReponseDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/exams")
class ExamController {

    private final IExamService examService;
    private final ModelMapper modelMapper;

    @Autowired
    ExamController(ExamService examService, ModelMapper modelMapper) {
        this.examService = examService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("")
    List<ExamRestReponseDto> getExams() {
        return examService.getAllExams()
                .stream()
                .map(this::convertToExamDto)
                .collect(Collectors.toList());
    }

//    @PostMapping("")
//    Exam createExam(@RequestBody Exam exam) {
//        return repository.save(exam);
//    }
//
//    @GetMapping("/{id}")
//    Exam getExam(@PathVariable Long id) {
//        return repository.findById(id)
//            .orElseThrow(() -> new ExamNotFoundException(id));
//    }
//
//    @GetMapping("/{id}/questions")
//    List<JpaQuestion> getQuestions(@PathVariable Long id, @RequestParam int count) {
//        return repository.findById(id)
//                .orElseThrow(() -> new ExamNotFoundException(id))
//                .getQuestions(count);
//    }

    private ExamRestReponseDto convertToExamDto(Exam exam) {
        return modelMapper.map(exam, ExamRestReponseDto.class);
    }
}
