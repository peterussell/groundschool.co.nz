package nz.co.groundschool.api.presentation.controllers;

import nz.co.groundschool.api.infrastructure.entities.JpaQuestion;
import nz.co.groundschool.api.infrastructure.repository.QuestionRepository;
import nz.co.groundschool.api.application.exceptions.QuestionNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/questions")
class QuestionController {

    private final QuestionRepository repository;

    QuestionController(QuestionRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{id}")
    JpaQuestion getQuestion(@PathVariable Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new QuestionNotFoundException(id));
    }
}
