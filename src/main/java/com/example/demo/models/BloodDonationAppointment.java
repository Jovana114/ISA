package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalTime;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "blood_appointments")
public class BloodDonationAppointment implements Comparable<BloodDonationAppointment>{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String date;
    private String time;
    private int duration;
    private Boolean reserved;
    private Boolean active;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "staff_appointment",
            joinColumns = @JoinColumn(name = "blood_appointments_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private Set<User> userStaff = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private User users;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private CenterProfile center_profile;

    @OneToOne(mappedBy = "blood_appointments", fetch = FetchType.LAZY)
    @JsonIgnore
    private BloodReport blood_report;

    public BloodDonationAppointment() {
    }

    public Set<User> getUserStaff() {
        return userStaff;
    }

    public void setUserStaff(Set<User> userStaff) {
        this.userStaff = userStaff;
    }

    public BloodReport getBlood_report() {
        return blood_report;
    }

    public void setBlood_report(BloodReport blood_report) {
        this.blood_report = blood_report;
    }

    public CenterProfile getCenter_profile() {
        return center_profile;
    }

    public void setCenter_profile(CenterProfile center_profile) {
        this.center_profile = center_profile;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public Boolean getReserved() {
        return reserved;
    }

    public void setReserved(Boolean reserved) {
        this.reserved = reserved;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public User getUsers() {
        return users;
    }

    public void setUsers(User users) {
        this.users = users;
    }

    public BloodDonationAppointment(String date, String time, int duration, Boolean reserved, Boolean active, User users, CenterProfile center_profile) {
        this.date = date;
        this.time = time;
        this.duration = duration;
        this.reserved = reserved;
        this.active = active;
        this.users = users;
        this.center_profile = center_profile;
    }

    public BloodDonationAppointment(String date, String time, int duration, Boolean reserved, Boolean active, CenterProfile center_profile) {
        this.date = date;
        this.time = time;
        this.duration = duration;
        this.reserved = reserved;
        this.active = active;
        this.center_profile = center_profile;
    }

    public BloodDonationAppointment(String date, String time, int duration, Boolean reserved, Boolean active, User users, CenterProfile center_profile, Set<User> userStaff) {
        this.date = date;
        this.time = time;
        this.duration = duration;
        this.reserved = reserved;
        this.active = active;
        this.users = users;
        this.center_profile = center_profile;
        this.userStaff = userStaff;
    }

    @Override
    public int compareTo(BloodDonationAppointment u) {
        if (getTime() == null || u.getTime() == null) {
            return 0;
        }
        return LocalTime.parse(getTime()).compareTo(LocalTime.parse(u.getTime()));
    }

    public int compareToDate(BloodDonationAppointment u) {
        if (getDate() == null || u.getDate() == null) {
            return 0;
        }
        return LocalTime.parse(getDate()).compareTo(LocalTime.parse(u.getDate()));
    }
}
