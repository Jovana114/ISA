package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
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
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank
//  @Size(max = 20)
  private String username;

  @NotBlank
//  @Size(max = 50)
  @Email
  private String email;

  @NotBlank
//  @Size(max = 120)
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
  private String jmbg;

  @NotBlank
  private String gender;

  @NotBlank
  private String occupation;

  @NotBlank
  private String empscho; // EMPLOYER/SCHOOL

  //@NotBlank
  private int points;

  // @NotBlank
  private int penals;

  @OneToMany(mappedBy = "users", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private List<BloodReport> blood_report;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(  name = "user_roles", 
        joinColumns = @JoinColumn(name = "user_id"), 
        inverseJoinColumns = @JoinColumn(name = "role_id"))
  private Set<Role> roles = new HashSet<>();

  @OneToMany(mappedBy = "users", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private List<BloodDonationAppointment> blood_appointments;

  @ManyToOne(fetch = FetchType.LAZY)
  @JsonIgnore
  private CenterProfile center_profile;

  private Boolean is_first_login;

  public User(String username, String email, String password, String firstname, String surname, String address, String city, String state, String phone, String jmbg, String gender, String occupation, String empscho, int points, int penals, List<BloodReport> blood_report, Set<Role> roles, List<BloodDonationAppointment> blood_appointments, CenterProfile center_profile, Boolean isFirstLogin) {
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
    this.points = points;
    this.penals = penals;
    this.blood_report = blood_report;
    this.roles = roles;
    this.blood_appointments = blood_appointments;
    this.center_profile = center_profile;
    this.is_first_login = isFirstLogin;
  }

  public Boolean getIs_first_login() {
    return is_first_login;
  }

  public void setIs_first_login(Boolean is_first_login) {
    this.is_first_login = is_first_login;
  }

  public User(Long id, String username, String email, String password, String firstname, String surname, String address, String city, String state, String phone, String jmbg, String gender, String occupation, String empscho, int points, int penals, List<BloodReport> blood_report, Set<Role> roles, List<BloodDonationAppointment> blood_appointments, CenterProfile center_profile, Boolean isFirstLogin) {
    this.id = id;
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
    this.points = points;
    this.penals = penals;
    this.blood_report = blood_report;
    this.roles = roles;
    this.blood_appointments = blood_appointments;
    this.center_profile = center_profile;
    this.is_first_login = isFirstLogin;
  }

  public User(Long id, String username, String email, String password, String firstname, String surname, String address, String city, String state, String phone, String jmbg, String gender, String occupation, String empscho, int points, int penals, List<BloodReport> blood_report, Set<Role> roles, List<BloodDonationAppointment> appointments, CenterProfile center_profile) {
    this.id = id;
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
    this.points = points;
    this.penals = penals;
    this.blood_report = blood_report;
    this.roles = roles;
    this.blood_appointments = appointments;
    this.center_profile = center_profile;
  }

  public User(String username) {
    this.username = username;
  }

  public List<BloodReport> getBlood_report() {
    return blood_report;
  }

  public void setBlood_report(List<BloodReport> blood_report) {
    this.blood_report = blood_report;
  }

  public List<BloodDonationAppointment> getBlood_appointments() {
    return blood_appointments;
  }

  public void setBlood_appointments(List<BloodDonationAppointment> blood_appointments) {
    this.blood_appointments = blood_appointments;
  }

  public User() {
  }

  public User(String username, String email, String password, String firstname, String surname, String address, String city, String state, String phone, String jmbg, String gender, String occupation, String empscho, int points, int penals) {
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
    this.points = points;
    this.penals = penals;
  }



  public User(Long id, String username, String email, String password, String firstname, String surname, String address, String city, String state, String phone, String jmbg, String gender, String occupation, String empscho, int points, int penals, Set<Role> roles, CenterProfile center_profile) {
    this.id = id;
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
    this.roles = roles;
    this.center_profile = center_profile;
    this.points = points;
    this.penals = penals;
  }

  public CenterProfile getCenter_profile() {
    return center_profile;
  }

  public void setCenter_profile(CenterProfile center_profile) {
    this.center_profile = center_profile;
  }

  public User(String username, String email, String firstname, String surname, String address, String city, String state, String phone, String jmbg, String gender, String occupation, String empscho, int points, int penals) {
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
    this.points = points;
    this.penals = penals;
  }

    public User updateData(User user, String username, String firstname, String surname, String address, String city, String state, String phone, String jmbg, String gender, String occupation, String empscho){
    user.setUsername(username);
    user.setFirstname(firstname);
    user.setSurname(surname);
    user.setAddress(address);
    user.setCity(city);
    user.setState(state);
    user.setPhone(phone);
    user.setJmbg(jmbg);
    user.setGender(gender);
    user.setOccupation(occupation);
    user.setEmpscho(empscho);
    return user;
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

  public int getPoints() {
    return points;
  }

  public void setPoints(int points) {
    this.points = points;
  }

  public List<BloodDonationAppointment> getAppointments() {
    return blood_appointments;
  }

  public void setAppointments(List<BloodDonationAppointment> appointments) {
    this.blood_appointments = appointments;
  }

  public int getPenals() {
    return penals;
  }

  public void setPenals(int penals) {
    this.penals = penals;
  }
}
