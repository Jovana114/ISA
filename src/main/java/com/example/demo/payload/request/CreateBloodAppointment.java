package com.example.demo.payload.request;

import com.example.demo.models.User;

import java.util.List;

public class CreateBloodAppointment {
    private String date;
    private String time;
    private int duration;
    private List<String> users;

    public  CreateBloodAppointment(){}

    public CreateBloodAppointment(String date, String time, int duration, List<String> users) {
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

    public List<String> getUsers() {
        return users;
    }

    public void setUsers(List<String> users) {
        this.users = users;
    }
}
