package com.example.demo.auth;


import lombok.Data;

@Data
public class AuthRequest {

    private String emailAddress;
    private String password;
    public AuthRequest(String emailAddress, String password) {
        super();
        this.emailAddress = emailAddress;
        this.password = password;
    }

    public AuthRequest() {

    }

}
