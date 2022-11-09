package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.payload.UserDto;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    public UserRepository userRepository;

    public User getByUsernameOrEmail(String email, String username){
        return userRepository.findByUsernameOrEmail(email, username);
    }

    public User getOne(Long id){
        return userRepository.getOne(id);
    }
}
