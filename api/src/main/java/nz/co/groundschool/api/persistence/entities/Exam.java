package nz.co.groundschool.api.persistence.entities;

import jakarta.persistence.*;
import nz.co.groundschool.api.domain.enums.LicenseType;
import nz.co.groundschool.api.persistence.converters.StringListConverter;

import java.util.ArrayList;
import java.util.Set;

@Entity
public class Exam {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private LicenseType licenseType;
    private String slug;
    private int numAvailableQuestions;
    private String aspeqName;
    private int aspeqNumQuestions;
    @Convert(converter = StringListConverter.class)
    private ArrayList<String> aspeqAllowedMaterials;

    @ManyToMany
    @JoinTable(name = "exam_question",
            joinColumns = @JoinColumn(name = "exam_id"),
            inverseJoinColumns = @JoinColumn(name = "question_id"))
    private Set<Exam> exams;

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

    public int getAspeqNumQuestions() {
        return this.aspeqNumQuestions;
    }

    public void setAspeqNumQuestions(int aspeqNumQuestions) {
        this.aspeqNumQuestions = aspeqNumQuestions;
    }

    public ArrayList<String> getAspeqAllowedMaterials() {
        return this.aspeqAllowedMaterials;
    }

    public void setAspeqAllowedMaterials(ArrayList<String> aspeqAllowedMaterials) {
        this.aspeqAllowedMaterials = aspeqAllowedMaterials;
    }
}
