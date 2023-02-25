package com.example.demo.service;

import com.example.demo.dto.UserDto;
import com.example.demo.models.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Service
public class AdminCenterService {

    @Autowired
    UserRepository userRepository;

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User updateAdminCenterService(User toBeUpdated, User user) {

        toBeUpdated.setUsername(user.getUsername());
        toBeUpdated.setEmail(user.getEmail());
        toBeUpdated.setFirstname(user.getFirstname());
        toBeUpdated.setAddress(user.getAddress());
        toBeUpdated.setSurname(user.getSurname());
        toBeUpdated.setCity(user.getCity());
        toBeUpdated.setEmpscho(user.getEmpscho());
        toBeUpdated.setGender(user.getGender());
        toBeUpdated.setJmbg(user.getJmbg());
        toBeUpdated.setOccupation(user.getOccupation());
        toBeUpdated.setPhone(user.getPhone());

        return toBeUpdated;
    }

    public User changePasswordService(User toBeUpdated, UserDto user) {

        if(encoder.matches(user.getPasswordOld(), toBeUpdated.getPassword())){
            toBeUpdated.setPassword(encoder.encode(user.getPasswordNew()));
        }
        toBeUpdated.setIs_first_login(false);

        return toBeUpdated;
    }

    public User addPointsService(User _user){
            _user.setPoints(_user.getPoints()+1);
            return _user;
    }

    public User addPenlsService(User _user){
        _user.setPenals(_user.getPenals()+1);
        return _user;
    }
}