package nz.co.groundschool.api.application.converters;

import nz.co.groundschool.api.domain.entities.AspeqDetails;
import nz.co.groundschool.api.domain.entities.Exam;
import nz.co.groundschool.api.infrastructure.entities.JpaExam;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;

public class ExamConverter {

    private final ModelMapper modelMapper;

    public ExamConverter(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public Exam convert(JpaExam jpaExam) {
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
                var aspeqDetails = new AspeqDetails();
                aspeqDetails.setName(source.getAspeqName());
                aspeqDetails.setDurationMinutes(source.getAspeqDurationMinutes());
                aspeqDetails.setNumQuestions(source.getAspeqNumQuestions());

                destination.setAspeqExamDetails(aspeqDetails);

                return destination;
            }
        };

        modelMapper.addConverter(jpaExamConverter);
        return modelMapper.map(jpaExam, Exam.class);
    }
}
