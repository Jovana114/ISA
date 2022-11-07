package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserAdminService userAdminService;

    @Autowired
    private UserObjService userObjService;

    @Autowired
    private UserEmployeesService userEmployeesService;

    public Object findUserByEmailAddress(String emailAddress)
    {
        if (userAdminService.findUserByEmailAddress(emailAddress) != null)
        {
            return userAdminService.findUserByEmailAddress(emailAddress);
        }
        else if (userObjService.findUserByEmailAddress(emailAddress) != null )
        {
            return userObjService.findUserByEmailAddress(emailAddress);
        }
        else if (userEmployeesService.findUserByEmailAddress(emailAddress) != null )
        {
            return userEmployeesService.findUserByEmailAddress(emailAddress);
        }
        else return null;
    }

}
