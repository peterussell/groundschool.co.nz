package nz.co.groundschool.api.persistence.helpers;

import nz.co.groundschool.api.domain.enums.LicenseType;
import nz.co.groundschool.api.persistence.entities.Exam;
import nz.co.groundschool.api.persistence.repository.ExamRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@Configuration
public class LoadDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(ExamRepository repository) {
        return args -> {

            // Clear
            repository.deleteAll();

            // Create seed data
            List<String> pplAirLawAllowedMaterials = List.of("AIP New Zealand - Volume 2 & 3");
            List<String> pplAirTechAllowedMaterials = List.of("Non-electronic nav computer", "Non-programmable calculator", "Standard ruler");

            Exam pplAirLaw = new Exam(
                    "Air Law",
                    LicenseType.PPL,
                    "air-law",
                    32,
                    "PPL Air Law (Aeroplane)",
                    70,
                    35,
                    pplAirLawAllowedMaterials);

            Exam pplAirTech = new Exam(
                    "Air Tech",
                    LicenseType.PPL,
                    "air-tech",
                    20,
                    "PPL Aircraft Technical Knowledge (Aeroplane)",
                    90,
                    45,
                    pplAirTechAllowedMaterials);

            log.info("Preloading " + repository.save(pplAirLaw));
            log.info("Preloading " + repository.save(pplAirTech));
        };
    }

}
