package com.example.demo.service;

import com.example.demo.model.UserAdmin;
import com.example.demo.model.UserEmployees;
import com.example.demo.repository.UserAdminRepository;
import com.example.demo.repository.UserEmployeesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserEmployeesService {

    @Autowired
    private UserEmployeesRepository userEmployeesRepository;

    public UserEmployees findUserByEmailAddress(String emailAddress) {
        UserEmployees userEmployees = null;

        for (UserEmployees d : userEmployeesRepository.findAll()) {
            if(d.getEmail().equals(emailAddress))
            {
                userEmployees = d;
                break;
            }
        }
        return userEmployees;
    }

}
