package com.example.demo.service;

import com.example.demo.model.UserEmployees;
import com.example.demo.model.UserObj;
import com.example.demo.repository.UserEmployeesRepository;
import com.example.demo.repository.UserObjRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserObjService {

    @Autowired
    private UserObjRepository userObjRepository;

    public UserObj findUserByEmailAddress(String emailAddress) {
        UserObj userObj = null;

        for (UserObj d : userObjRepository.findAll()) {
            if(d.getEmail().equals(emailAddress))
            {
                userObj = d;
                break;
            }
        }
        return userObj;
    }

}
