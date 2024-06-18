package nz.co.groundschool.api.presentation.controllers;

import nz.co.groundschool.api.persistence.entities.Exam;
import nz.co.groundschool.api.persistence.repository.ExamRepository;
import nz.co.groundschool.api.presentation.exceptions.ExamNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ExamController {

    private final ExamRepository repository;

    ExamController(ExamRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/exams")
    List<Exam> getExams() {
        return repository.findAll();
    }

    @PostMapping("/exams")
    Exam createExam(@RequestBody Exam exam) {
        return repository.save(exam);
    }

    @GetMapping("/exams/{id}")
    Exam getExam(@PathVariable Long id) {
        return repository.findById(id)
            .orElseThrow(() -> new ExamNotFoundException(id));
    }

    @DeleteMapping("/employees/{id}")
    void deleteExam(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
