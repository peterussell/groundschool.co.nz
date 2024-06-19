package nz.co.groundschool.api.presentation.controllers;

import nz.co.groundschool.api.persistence.repository.QuestionRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/questions")
class QuestionController {

    private final QuestionRepository repository;

    QuestionController(QuestionRepository repository) {
        this.repository = repository;
    }
}
