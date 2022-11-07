package com.example.demo.service;

import com.example.demo.model.UserAdmin;
import com.example.demo.repository.UserAdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserAdminService {

    @Autowired
    private UserAdminRepository userAdminRepository;

    public UserAdmin findUserByEmailAddress(String emailAddress) {
        UserAdmin userAdmin = null;

        for (UserAdmin d : userAdminRepository.findAll()) {
            if(d.getEmail().equals(emailAddress))
            {
                userAdmin = d;
                break;
            }
        }
        return userAdmin;
    }

}
