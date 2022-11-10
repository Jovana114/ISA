package com.example.demo.payload.request;

import java.util.Set;

import javax.validation.constraints.*;

public class SignupRequest {
  @NotBlank
  @Size(min = 3, max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  private String role;

  public String getFirstname() {
    return firstname;
  }

  public String getSurname() {
    return surname;
  }

  public String getAddress() {
    return address;
  }

  public String getCity() {
    return city;
  }

  public String getState() {
    return state;
  }

  public String getPhone() {
    return phone;
  }

  public String getJmbg() {
    return jmbg;
  }

  public String getGender() {
    return gender;
  }

  public String getOccupation() {
    return occupation;
  }

  public String getEmpscho() {
    return empscho;
  }

  @NotBlank
  @Size(min = 6, max = 40)
  private String password;

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
  @Size(min = 12, max = 12)
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

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getRole() {
    return this.role;
  }

  public void setRole(String role) {
    this.role = role;
  }
}
