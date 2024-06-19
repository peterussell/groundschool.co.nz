package nz.co.groundschool.api.persistence.entities;

import jakarta.persistence.*;
import nz.co.groundschool.api.domain.enums.LicenseType;
import nz.co.groundschool.api.persistence.converters.StringListConverter;

import java.util.List;

@Entity
public class Exam {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @Enumerated(EnumType.STRING)
    private LicenseType licenseType;
    private String slug;
    private int numAvailableQuestions;
    private String aspeqName;
    private int aspeqDurationMinutes;
    private int aspeqNumQuestions;
    @Convert(converter = StringListConverter.class)
    private List<String> aspeqAllowedMaterials;

    @ManyToMany
    @JoinTable(name = "exam_question",
            joinColumns = @JoinColumn(name = "exam_id"),
            inverseJoinColumns = @JoinColumn(name = "question_id"))
    private List<Question> questions;

    public Exam() { }

    public Exam(String name, LicenseType licenseType, String slug, int numAvailableQuestions, String aspeqName,
                int aspeqDurationMinutes, int aspeqNumQuestions, List<String> aspeqAllowedMaterials) {
        this.name = name;
        this.licenseType = licenseType;
        this.slug = slug;
        this.numAvailableQuestions = numAvailableQuestions;
        this.aspeqName = aspeqName;
        this.aspeqDurationMinutes = aspeqDurationMinutes;
        this.aspeqNumQuestions = aspeqNumQuestions;
        this.aspeqAllowedMaterials = aspeqAllowedMaterials;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LicenseType getLicenseType() {
        return this.licenseType;
    }

    public void setLicenseType(LicenseType licenseType) {
        this.licenseType = licenseType;
    }

    public String getSlug() {
        return this.slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public int getNumAvailableQuestions() {
        return this.numAvailableQuestions;
    }

    public void setNumAvailableQuestions(int numAvailableQuestions) {
        this.numAvailableQuestions = numAvailableQuestions;
    }

    public String getAspeqName() {
        return this.aspeqName;
    }

    public void setAspeqName(String aspeqName) {
        this.aspeqName = aspeqName;
    }

    public int getAspeqDurationMinutes() { return this.aspeqDurationMinutes; }

    public void setAspeqDurationMinutes(int aspeqDurationMinutes) {
        this.aspeqDurationMinutes = aspeqDurationMinutes;
    }

    public int getAspeqNumQuestions() {
        return this.aspeqNumQuestions;
    }

    public void setAspeqNumQuestions(int aspeqNumQuestions) {
        this.aspeqNumQuestions = aspeqNumQuestions;
    }

    public List<String> getAspeqAllowedMaterials() {
        return this.aspeqAllowedMaterials;
    }

    public void setAspeqAllowedMaterials(List<String> aspeqAllowedMaterials) {
        this.aspeqAllowedMaterials = aspeqAllowedMaterials;
    }

    public List<Question> getQuestions(int count) {
        return this.questions;
    }

    public void addQuestion(Question question) {
        this.questions.add(question);
    }
}
