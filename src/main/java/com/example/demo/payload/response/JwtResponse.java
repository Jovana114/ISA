package com.example.demo.payload.response;

import com.example.demo.models.Role;

import java.util.List;
import java.util.Set;

public class JwtResponse {
  private String token;
  private String type = "Bearer";
  private Long id;

//  private String role;
//  private String username;
//  private String email;
//  private String firstname;
//  private String surname;
//  private String address;
//  private String city;
//  private String state;
//  private String phone;
//  private String jmbg;
//  private String gender;
//  private String occupation;
//  private String empscho;
  private Set<Role> roles;

//  public JwtResponse(String accessToken, Long id, String username, String email, List<String> roles) {
  public JwtResponse(String accessToken, Long id, Set<Role> roles) {
    this.token = accessToken;
    this.id = id;
    this.roles = roles;
  }

  public String getToken() {
    return token;
  }

  public void setToken(String token) {
    this.token = token;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Set<Role> getRoles() {
    return roles;
  }

  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }
//
//  public Set<String> getRoles() {
//    return roles;
//  }
//
//  public void setRoles(Set<String> roles) {
//    this.roles = roles;
//  }
//
//  public String getUsername() {
//    return username;
//  }
//
//  public void setUsername(String username) {
//    this.username = username;
//  }
//
//  public String getEmail() {
//    return email;
//  }
//
//  public void setEmail(String email) {
//    this.email = email;
//  }
//
//  public String getFirstname() {
//    return firstname;
//  }
//
//  public void setFirstname(String firstname) {
//    this.firstname = firstname;
//  }
//
//  public String getSurname() {
//    return surname;
//  }
//
//  public void setSurname(String surname) {
//    this.surname = surname;
//  }
//
//  public String getAddress() {
//    return address;
//  }
//
//  public void setAddress(String address) {
//    this.address = address;
//  }
//
//  public String getCity() {
//    return city;
//  }
//
//  public void setCity(String city) {
//    this.city = city;
//  }
//
//  public String getState() {
//    return state;
//  }
//
//  public void setState(String state) {
//    this.state = state;
//  }
//
//  public String getPhone() {
//    return phone;
//  }
//
//  public void setPhone(String phone) {
//    this.phone = phone;
//  }
//
//  public String getJmbg() {
//    return jmbg;
//  }
//
//  public void setJmbg(String jmbg) {
//    this.jmbg = jmbg;
//  }
//
//  public String getGender() {
//    return gender;
//  }
//
//  public void setGender(String gender) {
//    this.gender = gender;
//  }
//
//  public String getOccupation() {
//    return occupation;
//  }
//
//  public void setOccupation(String occupation) {
//    this.occupation = occupation;
//  }
//
//  public String getEmpscho() {
//    return empscho;
//  }
//
//  public void setEmpscho(String empscho) {
//    this.empscho = empscho;
//  }
//

}
