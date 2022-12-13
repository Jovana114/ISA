package com.example.demo.payload.request;

import com.example.demo.models.User;

import java.util.List;

public class CreateBloodAppointment {
    private String date;
    private String time;
    private int duration;
    private List<Long> users;

    public  CreateBloodAppointment(){}

    public CreateBloodAppointment(String date, String time, int duration, List<Long> users) {
        this.date = date;
        this.time = time;
        this.duration = duration;
        this.users = users;
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

    public List<Long> getUsers() {
        return users;
    }

    public void setUsers(List<Long> users) {
        this.users = users;
    }
}
