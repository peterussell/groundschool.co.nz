package nz.co.groundschool.api.application.services;

import nz.co.groundschool.api.domain.entities.AspeqExamDetails;
import nz.co.groundschool.api.domain.entities.Exam;
import nz.co.groundschool.api.infrastructure.entities.JpaExam;
import nz.co.groundschool.api.infrastructure.repository.ExamRepository;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExamService implements IExamService {

    private final ExamRepository examRepository;
    private final ModelMapper modelMapper;

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

    private Exam convertToDomainEntity(JpaExam repositoryExam) {
        Converter<JpaExam, Exam> jpaExamConverter = new Converter<JpaExam, Exam>() {
            public Exam convert(MappingContext<JpaExam, Exam> context) {
                JpaExam source = context.getSource();
                Exam destination = context.getDestination() == null ? new Exam() : context.getDestination();

                // Map 1:1 fields
                destination.setId(source.getId());
                destination.setName(source.getName());
                destination.setLicenseType(source.getLicenseType());
                destination.setSlug(source.getSlug());
                destination.setNumAvailableQuestions(source.getNumAvailableQuestions());

                // Map custom aspeqDetails field
                var aspeqDetails = new AspeqExamDetails();
                aspeqDetails.setName(source.getAspeqName());
                aspeqDetails.setDurationMinutes(source.getAspeqDurationMinutes());
                aspeqDetails.setNumQuestions(source.getAspeqNumQuestions());

                destination.setAspeqExamDetails(aspeqDetails);

                return destination;
            }
        };

        modelMapper.addConverter(jpaExamConverter);

        return modelMapper.map(repositoryExam, Exam.class);
    }
}
