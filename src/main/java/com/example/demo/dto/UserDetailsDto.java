package com.example.demo.dto;

import lombok.Data;

@Data
public class UserDetailsDto {

    private String firstName;
    private String lastName;
    private String email;
    private String typeOfUser;
    private String jwt;
    private boolean firstLogin;
    private Long id;

    public UserDetailsDto() {

    }

    public UserDetailsDto(String firstName, String lastName, String email, String typeOfUser, String jwt,
                           boolean firstLogin, Long id) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.typeOfUser = typeOfUser;
        this.jwt = jwt;
        this.firstLogin = firstLogin;
        this.id = id;
    }
}