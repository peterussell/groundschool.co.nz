package nz.co.groundschool.api.application.services;

import nz.co.groundschool.api.domain.entities.Exam;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IExamService {
    public List<Exam> getAllExams();
}
