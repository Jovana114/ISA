package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
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

    @NotBlank
    private double averageRating;

    @OneToMany(mappedBy = "center_profile", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<User> users;

    @NotBlank
    private Date appointmentStart;

    @NotBlank
    private Date appointmentEnd;

    public CenterProfile() {
    }

    public CenterProfile(Long id, String name, String address, String description, double averageRating,
                         List<User> users, Date appointmentStart, Date appointmentEnd) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.description = description;
        this.averageRating = averageRating;
        this.users = users;
        this.appointmentStart = appointmentStart;
        this.appointmentEnd = appointmentEnd;
    }

    public List<User> getUserObjs() {
        return users;
    }

    public void setUserObjs(List<User> users) {
        this.users = users;
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

    public double getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(double averageRating) {
        this.averageRating = averageRating;
    }



    public Date getAppointmentStart() {
        return appointmentStart;
    }

    public void setAppointmentStart(Date appointmentStart) {
        this.appointmentStart = appointmentStart;
    }

    public Date getAppointmentEnd() {
        return appointmentEnd;
    }

    public void setAppointmentEnd(Date appointmentEnd) {
        this.appointmentEnd = appointmentEnd;
    }
}
