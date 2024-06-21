package nz.co.groundschool.api.domain.entities;

import nz.co.groundschool.api.domain.enums.LicenseType;

public class Exam {
    private Long id;
    private String name;
    private LicenseType licenseType;
    private String slug;
    private int numAvailableQuestions;
    private AspeqExamDetails aspeqExamDetails;

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

    public AspeqExamDetails getAspeqExamDetails() {
        return this.aspeqExamDetails;
    }

    public void setAspeqExamDetails(AspeqExamDetails aspeqExamDetails) {
        this.aspeqExamDetails = aspeqExamDetails;
    }
}
