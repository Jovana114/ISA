package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "center_profile")
public class CenterProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank
    private String name;

    @NotBlank
    private String address;

    @NotBlank
    private String description;

    @NotNull
    private Double averageRating;

    @NotBlank
    private String appointmentStart;

    @NotBlank
    private String appointmentEnd;

    public CenterProfile() {
    }

    public CenterProfile(Long id, String name, String address, String description, Double averageRating,
                         String appointmentStart, String appointmentEnd) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.description = description;
        this.averageRating = averageRating;
        this.appointmentStart = appointmentStart;
        this.appointmentEnd = appointmentEnd;
    }

    @Override
    public String toString() {
        return "CenterProfile{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", description='" + description + '\'' +
                ", averageRating=" + averageRating +
                ", appointmentStart='" + appointmentStart + '\'' +
                ", appointmentEnd='" + appointmentEnd + '\'' +
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

    public String getAppointmentStart() {
        return appointmentStart;
    }

    public void setAppointmentStart(String appointmentStart) {
        this.appointmentStart = appointmentStart;
    }

    public String getAppointmentEnd() {
        return appointmentEnd;
    }

    public void setAppointmentEnd(String appointmentEnd) {
        this.appointmentEnd = appointmentEnd;
    }
}