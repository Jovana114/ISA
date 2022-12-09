package com.example.demo.models;

import com.example.demo.service.UserService;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "center_profile")
public class CenterProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    @NotBlank
    private String address;

    @NotBlank
    private String description;

    @NotNull
    private Double averageRating;


    @OneToMany(mappedBy = "center_profile", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<User> users;

    @OneToMany(mappedBy = "center_profile", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<BloodDonationAppointment> bloodDonationAppointments;

    @OneToMany(mappedBy = "center_profile", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<BloodReport> bloodReports;
    private int bloodA;
    private int bloodB;
    private int bloodAB;
    private int bloodO;

    public List<BloodReport> getBloodReports() {
        return bloodReports;
    }

    public void setBloodReports(List<BloodReport> bloodReports) {
        this.bloodReports = bloodReports;
    }

    public CenterProfile(Long id, String name, String address, String description, Double averageRating, List<User> users, List<BloodDonationAppointment> bloodDonationAppointments, List<BloodReport> bloodReports, int bloodA, int bloodB, int bloodAB, int bloodO) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.description = description;
        this.averageRating = averageRating;
        this.users = users;
        this.bloodDonationAppointments = bloodDonationAppointments;
        this.bloodReports = bloodReports;
        this.bloodA = bloodA;
        this.bloodB = bloodB;
        this.bloodAB = bloodAB;
        this.bloodO = bloodO;
    }

    public CenterProfile() {
    }

    public List<BloodDonationAppointment> getBloodDonationAppointments() {
        return bloodDonationAppointments;
    }

    public void setBloodDonationAppointments(List<BloodDonationAppointment> bloodDonationAppointments) {
        this.bloodDonationAppointments = bloodDonationAppointments;
    }

    public int getBloodA() {
        return bloodA;
    }

    public void setBloodA(int bloodA) {
        this.bloodA = bloodA;
    }

    public int getBloodB() {
        return bloodB;
    }

    public void setBloodB(int bloodB) {
        this.bloodB = bloodB;
    }

    public int getBloodAB() {
        return bloodAB;
    }

    public void setBloodAB(int bloodAB) {
        this.bloodAB = bloodAB;
    }

    public int getBloodO() {
        return bloodO;
    }

    public void setBloodO(int bloodO) {
        this.bloodO = bloodO;
    }

    public CenterProfile(String name, String address, String description, Double averageRating, int bloodA, int bloodB, int bloodAB, int bloodO) {
        this.name = name;
        this.address = address;
        this.description = description;
        this.averageRating = averageRating;
        this.bloodA = bloodA;
        this.bloodB = bloodB;
        this.bloodAB = bloodAB;
        this.bloodO = bloodO;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public CenterProfile(String name, String address, String description, Double averageRating) {
        this.name = name;
        this.address = address;
        this.description = description;
        this.averageRating = averageRating;
    }

    public CenterProfile(Long id, String name, String address, String description, Double averageRating) {

        this.id = id;
        this.name = name;
        this.address = address;
        this.description = description;
        this.averageRating = averageRating;
    }

    @Override
    public String toString() {
        return "CenterProfile{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", description='" + description + '\'' +
                ", averageRating=" + averageRating + '\'' +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(Double averageRating) {
        this.averageRating = averageRating;
    }
}
