package com.example.demo.payload.response;

public class UserResponseWithBloodAppointement {

    private String username;
    private String email;
    private String firstname;
    private String surname;
    private String address;
    private String phone;
    private String jmbg;
    private String gender;
    private String date_when_blood_was_donated;
    private String time_when_blood_was_donated;

    public UserResponseWithBloodAppointement(){}

    public UserResponseWithBloodAppointement(String username, String email, String firstname, String surname, String address, String phone, String jmbg, String gender, String date_when_blood_was_donated, String time_when_blood_was_donated) {
        this.username = username;
        this.email = email;
        this.firstname = firstname;
        this.surname = surname;
        this.address = address;
        this.phone = phone;
        this.jmbg = jmbg;
        this.gender = gender;
        this.date_when_blood_was_donated = date_when_blood_was_donated;
        this.time_when_blood_was_donated = time_when_blood_was_donated;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getJmbg() {
        return jmbg;
    }

    public void setJmbg(String jmbg) {
        this.jmbg = jmbg;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDate_when_blood_was_donated() {
        return date_when_blood_was_donated;
    }

    public void setDate_when_blood_was_donated(String date_when_blood_was_donated) {
        this.date_when_blood_was_donated = date_when_blood_was_donated;
    }

    public String getTime_when_blood_was_donated() {
        return time_when_blood_was_donated;
    }

    public void setTime_when_blood_was_donated(String time_when_blood_was_donated) {
        this.time_when_blood_was_donated = time_when_blood_was_donated;
    }
}
