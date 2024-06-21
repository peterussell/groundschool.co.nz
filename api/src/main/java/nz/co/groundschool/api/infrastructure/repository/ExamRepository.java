package nz.co.groundschool.api.infrastructure.repository;

import nz.co.groundschool.api.infrastructure.entities.Exam;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamRepository extends JpaRepository<Exam, Long> {
}
