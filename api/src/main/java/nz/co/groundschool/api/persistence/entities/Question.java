package nz.co.groundschool.api.persistence.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Question {
    @Id
    @GeneratedValue
    private Long id;
    private String authorName;
    private LocalDateTime addedDate;
    private String questionText;
    private String correctAnswer;
    private String incorrectAnswer1;
    private String incorrectAnswer2;
    private String incorrectAnswer3;
    private String syllabusReference;
}
