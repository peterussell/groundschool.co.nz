package nz.co.groundschool.api.infrastructure.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class JpaQuestion {
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

    JpaQuestion() { }

    public JpaQuestion(String authorName, LocalDateTime addedDate, String questionText, String correctAnswer,
                       String incorrectAnswer1, String incorrectAnswer2, String incorrectAnswer3,
                       String syllabusReference) {
        this.authorName = authorName;
        this.addedDate = addedDate;
        this.questionText = questionText;
        this.correctAnswer = correctAnswer;
        this.incorrectAnswer1 = incorrectAnswer1;
        this.incorrectAnswer2 = incorrectAnswer2;
        this.incorrectAnswer3 = incorrectAnswer3;
        this.syllabusReference = syllabusReference;
    }
}
