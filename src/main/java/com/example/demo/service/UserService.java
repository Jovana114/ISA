package com.example.demo.service;

import com.example.demo.models.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAll(){
        return userRepository.findAll();
    }

    public User getOne(Long id){
        return userRepository.getOne(id);
    }

    //public List<User> findByNameOrSurnameContaining(String name){ return userRepository.findByFirstnameOrSurnameContaining(name, name);}




}
