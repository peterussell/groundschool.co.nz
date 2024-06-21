package nz.co.groundschool.api.presentation.advice;

import nz.co.groundschool.api.application.exceptions.ExamNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExamNotFoundAdvice {

    @ExceptionHandler(ExamNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String examNotFoundHandler(ExamNotFoundException e) {
        return e.getMessage();
    }
}
