package nz.co.groundschool.api.persistence.entities;

import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import nz.co.groundschool.api.persistence.converters.StringListConverter;

import java.util.ArrayList;

@Entity
public class Exam {
    private @Id
    @GeneratedValue Long id;
    private String name;
    private String licenseType;
    private String slug;
    private int numAvailableQuestions;
    private String aspeqName;
    private int aspeqNumQuestions;
    @Convert(converter = StringListConverter.class)
    private ArrayList<String> aspeqAllowedMaterials;

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

    public String getLicenseType() {
        return this.licenseType;
    }

    public void setLicenseType(String licenseType) {
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
