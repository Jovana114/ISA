package com.example.demo.payload;

import com.example.demo.model.Role;
import com.example.demo.model.User;
import lombok.Data;

@Data
public class UserDto {

    private User user;
    private Role role;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
