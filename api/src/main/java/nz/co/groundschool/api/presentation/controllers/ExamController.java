package nz.co.groundschool.api.presentation.controllers;

import nz.co.groundschool.api.persistence.entities.Exam;
import nz.co.groundschool.api.persistence.entities.Question;
import nz.co.groundschool.api.persistence.repository.ExamRepository;
import nz.co.groundschool.api.presentation.exceptions.ExamNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exams")
class ExamController {

    private final ExamRepository repository;

    ExamController(ExamRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    List<Exam> getExams() {
        return repository.findAll();
    }

    @PostMapping("")
    Exam createExam(@RequestBody Exam exam) {
        return repository.save(exam);
    }

    @GetMapping("/{id}")
    Exam getExam(@PathVariable Long id) {
        return repository.findById(id)
            .orElseThrow(() -> new ExamNotFoundException(id));
    }

    @GetMapping("/{id}/questions")
    List<Question> getQuestions(@PathVariable Long id, @RequestParam int count) {
        return repository.findById(id)
                .orElseThrow(() -> new ExamNotFoundException(id))
                .getQuestions(count);
    }
}
