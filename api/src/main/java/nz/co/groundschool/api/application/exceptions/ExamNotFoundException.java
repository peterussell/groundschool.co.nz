package nz.co.groundschool.api.application.exceptions;

public class ExamNotFoundException extends RuntimeException {

    public ExamNotFoundException(Long id) {
        super("Could not find exam with ID " + id);
    }

}
