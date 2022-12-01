package com.example.demo.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalTime;


@Entity
@Table(name = "blood_appointments")
public class BloodDonationAppointment implements Comparable<BloodDonationAppointment>{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

//    @NotBlank
    private String date;
//    @NotBlank
    private String time;
//    @NotBlank
    private int duration;

//    @NotBlank
    private Boolean reserved;

    @ManyToOne(fetch = FetchType.LAZY)
    private User users;

    public BloodDonationAppointment() {
    }

    public BloodDonationAppointment(Long id, String date, String time, int duration, Boolean reserved, User users) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.duration = duration;
        this.reserved = reserved;
        this.users = users;
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

    public User getUsers() {
        return users;
    }

    public void setUsers(User users) {
        this.users = users;
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
