package com.example.demo.payload.response;

public class BloodAppointmentResponse {
    private Long id;
    private String date;
    private String time;
    private int duration;
    private Boolean reserved;
    private Boolean active;
    private Long userId;
    private String first_name;
    private String last_name;
    private String email;

    public BloodAppointmentResponse(){

    }

    public BloodAppointmentResponse(Long id, String date, String time, int duration, Boolean reserved, Boolean active, Long userId, String first_name, String last_name, String email) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.duration = duration;
        this.reserved = reserved;
        this.active = active;
        this.userId = userId;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }
    public BloodAppointmentResponse(Long id, String date, String time, int duration, Boolean reserved, Boolean active) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.duration = duration;
        this.reserved = reserved;
        this.active = active;
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

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
