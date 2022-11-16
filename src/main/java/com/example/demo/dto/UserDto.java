package com.example.demo.dto;

import javax.persistence.Table;
public class UserDto {

    private String passwordOld;
    private String passwordNew;

    public String getPasswordNew() {
        return passwordNew;
    }

    public void setPasswordNew(String passwordNew) {
        this.passwordNew = passwordNew;
    }

    public String getPasswordOld() {
        return passwordOld;
    }

    public void setPasswordOld(String passwordF) {
        this.passwordOld = passwordF;
    }

    public UserDto(String passwordOld, String password) {
        this.passwordOld = passwordOld;
        this.passwordNew = password;
    }
}