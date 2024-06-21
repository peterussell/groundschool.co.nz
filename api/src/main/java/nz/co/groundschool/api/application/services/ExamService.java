package nz.co.groundschool.api.application.services;

import nz.co.groundschool.api.domain.entities.Exam;
import nz.co.groundschool.api.infrastructure.repository.ExamRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExamService implements IExamService {

    private ExamRepository examRepository;

    private ModelMapper modelMapper;

    @Autowired
    public ExamService(ExamRepository examRepository, ModelMapper modelMapper) {
        this.examRepository = examRepository;
        this.modelMapper = modelMapper;
    }

    public List<Exam> getAllExams() {
        return examRepository.findAll()
                .stream()
                .map(this::convertToDomainEntity)
                .collect(Collectors.toList());
    }

    private Exam convertToDomainEntity(nz.co.groundschool.api.infrastructure.entities.Exam repositoryExam) {
        return modelMapper.map(repositoryExam, Exam.class);
    }
}
