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

    @NotBlank
    private String date;
    @NotBlank
    private String time;
    @NotBlank
    private int duration;

    public BloodDonationAppointment() {
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

    public BloodDonationAppointment(Long id, String date, String time, int duration) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.duration = duration;
    }

    @Override
    public String toString() {
        return "BloodDonationAppointment{" +
                "id=" + id +
                ", date='" + date + '\'' +
                ", time='" + time + '\'' +
                ", duration=" + duration +
                '}';
    }


    @Override
    public int compareTo(BloodDonationAppointment u) {
        if (getTime() == null || u.getTime() == null) {
            return 0;
        }
        return LocalTime.parse(getTime()).compareTo(LocalTime.parse(u.getTime()));
    }
}
