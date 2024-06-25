package nz.co.groundschool.api.infrastructure.repository;

import nz.co.groundschool.api.infrastructure.entities.JpaExam;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamRepository extends JpaRepository<JpaExam, Long> {
}
