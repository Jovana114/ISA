package com.example.demo.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users", 
    uniqueConstraints = { 
      @UniqueConstraint(columnNames = "username"),
      @UniqueConstraint(columnNames = "email") 
    })
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @NotBlank
  @Size(max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  @NotBlank
  @Size(max = 120)
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


  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(  name = "user_roles", 
        joinColumns = @JoinColumn(name = "user_id"), 
        inverseJoinColumns = @JoinColumn(name = "role_id"))
  private Set<Role> roles = new HashSet<>();

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(  name = "centre_profiles",
          joinColumns = @JoinColumn(name = "user_id"),
          inverseJoinColumns = @JoinColumn(name = "centre_profile_id"))
  private Set<CenterProfile> center_profile = new HashSet<>();

  public User() {
  }

  public User(String username, String email, String password, String firstname, String surname, String address, String city, String state, String phone, String jmbg, String gender, String occupation, String empscho) {
    this.username = username;
    this.email = email;
    this.password = password;
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

  public User(String username, String email, String firstname, String surname, String address, String city, String state, String phone, String jmbg, String gender, String occupation, String empscho) {
    this.username = username;
    this.email = email;
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

  public User(String username, String email, String password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
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

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Set<Role> getRoles() {
    return roles;
  }

  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }

  public String getEmpscho() {
    return empscho;
  }

  public void setEmpscho(String empscho) {
    this.empscho = empscho;
  }

  public String getOccupation() {
    return occupation;
  }

  public void setOccupation(String occupation) {
    this.occupation = occupation;
  }

  public String getGender() {
    return gender;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public String getJmbg() {
    return jmbg;
  }

  public void setJmbg(String jmbg) {
    this.jmbg = jmbg;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getSurname() {
    return surname;
  }

  public void setSurname(String surname) {
    this.surname = surname;
  }

  public String getFirstname() {
    return firstname;
  }

  public void setFirstname(String firstname) {
    this.firstname = firstname;
  }

}
