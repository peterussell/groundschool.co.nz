package nz.co.groundschool.api.persistence.repository;

import nz.co.groundschool.api.persistence.entities.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
