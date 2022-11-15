package com.example.demo.models;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class EditUser {
    @NotBlank
        private String username;

        @NotBlank
        private String firstname;

        @NotBlank
        private String surname;

        @NotBlank
        private String address;

        @NotBlank
        private String city;

        @NotBlank
        private String state;

        @NotBlank
        private String phone;

        @NotBlank
        private String jmbg;

        @NotBlank
        private String gender;

        @NotBlank
        private String occupation;

        @NotBlank
        private String empscho; // EMPLOYER/SCHOOL

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
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

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getEmpscho() {
        return empscho;
    }

    public void setEmpscho(String empscho) {
        this.empscho = empscho;
    }

    public EditUser() {
    }

    public EditUser(String username, String firstname, String surname, String address, String city, String state, String phone, String jmbg, String gender, String occupation, String empscho) {
        this.username = username;
        this.firstname = firstname;
        this.surname = surname;
        this.address = address;
        this.city = city;
        this.state = state;
        this.phone = phone;
        this.jmbg = jmbg;
        this.gender = gender;
        this.occupation = occupation;
        this.empscho = empscho;
    }

    @Override
    public String toString() {
        return "EditUser{" +
                "username='" + username + '\'' +
                ", firstname='" + firstname + '\'' +
                ", surname='" + surname + '\'' +
                ", address='" + address + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", phone='" + phone + '\'' +
                ", jmbg='" + jmbg + '\'' +
                ", gender='" + gender + '\'' +
                ", occupation='" + occupation + '\'' +
                ", empscho='" + empscho + '\'' +
                '}';
    }
}
