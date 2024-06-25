package nz.co.groundschool.api.infrastructure.repository;

import nz.co.groundschool.api.infrastructure.entities.JpaQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<JpaQuestion, Long> {
}
