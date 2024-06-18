package nz.co.groundschool.api.persistence.repository;

import nz.co.groundschool.api.persistence.entities.Exam;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamRepository extends JpaRepository<Exam, Long> {
}
