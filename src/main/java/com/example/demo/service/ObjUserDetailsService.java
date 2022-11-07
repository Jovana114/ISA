package com.example.demo.service;

import com.example.demo.dto.UserDetailsDto;
import com.example.demo.model.UserAdmin;
import com.example.demo.model.UserEmployees;
import com.example.demo.model.UserObj;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ObjUserDetailsService implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String emailAddress) throws UsernameNotFoundException {
        Object user = userService.findUserByEmailAddress(emailAddress);
        if (user.getClass() == UserAdmin.class)
        {
            UserAdmin p = (UserAdmin)userService.findUserByEmailAddress(emailAddress);
            return new User(p.getEmail(), p.getPassword(), new ArrayList<>());
        }
        else if (user.getClass() == UserObj.class)
        {
            UserObj d = (UserObj)userService.findUserByEmailAddress(emailAddress);
            return new User(d.getEmail(), d.getPassword(), new ArrayList<>());
        }
        else if (user.getClass() == UserEmployees.class)
        {
            UserEmployees ca = (UserEmployees)userService.findUserByEmailAddress(emailAddress);
            return new User(ca.getEmail(), ca.getPassword(), new ArrayList<>());
        }
        else
        {
           return  null;
        }
    }

    public UserDetailsDto getUsersDetails(String emailAddress) {
        UserDetailsDto usersDetailsDTO = null;
        Object user = userService.findUserByEmailAddress(emailAddress);
        if (user.getClass() == UserAdmin.class)
        {
            UserAdmin p = (UserAdmin)userService.findUserByEmailAddress(emailAddress);
            usersDetailsDTO = new UserDetailsDto(p.getFirstName(), p.getLastName(), p.getEmail(), "UserAdmin", null, false, p.getId());
        }
        else if (user.getClass() == UserObj.class)
        {
            UserObj uobj = (UserObj)userService.findUserByEmailAddress(emailAddress);
            usersDetailsDTO = new UserDetailsDto(uobj.getFirstName(), uobj.getLastName(), uobj.getEmail(), "UserObj", null, uobj.getAutentification(), uobj.getId());
        }
        else if (user.getClass() == UserEmployees.class)
        {
            UserEmployees ca = (UserEmployees)userService.findUserByEmailAddress(emailAddress);
            usersDetailsDTO = new UserDetailsDto(ca.getFirstName(), ca.getLastName(), ca.getEmail(), "UserEmployees", null, true, ca.getId());
        }
        return usersDetailsDTO;
    }

}
