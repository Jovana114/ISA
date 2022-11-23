package com.example.demo.controllers;

import com.example.demo.dto.UserDto;
import com.example.demo.models.CenterProfile;
import com.example.demo.models.User;
import com.example.demo.payload.response.MessageResponse;
import com.example.demo.repository.CenterProfileRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/adminCenter")
public class AdminCenterController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    CenterProfileRepository centerProfileRepository;

    @PutMapping("/update/{id}")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> updateAdminCenter(@PathVariable("id") Long id, @RequestBody User user) {
        Optional<User> UserData = userRepository.findById(id);

        if (UserData.isPresent()) {
            User _User = UserData.get();

            try {
                _User.setUsername(user.getUsername());
                _User.setEmail(user.getEmail());
                _User.setFirstname(user.getFirstname());
                _User.setAddress(user.getAddress());
                _User.setSurname(user.getSurname());
                _User.setCity(user.getCity());
                _User.setEmpscho(user.getEmpscho());
                _User.setGender(user.getGender());
                _User.setJmbg(user.getJmbg());
                _User.setOccupation(user.getOccupation());
                _User.setPhone(user.getPhone());
                return new ResponseEntity<>(userRepository.save(_User), HttpStatus.OK);
            } catch (Exception e) {
                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Error exception: " + e));
            }
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /*
    @PutMapping("/update/{id}_{centre_id}")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> updateAdminCenter(@PathVariable("id") Long id, @RequestBody User user, @PathVariable("centre_id") Long center_profile_id) {
        Optional<User> UserData = userRepository.findById(id);

        if (UserData.isPresent()) {
            Optional<CenterProfile> centerProfile = centerProfileRepository.findById(center_profile_id);
            User _User = UserData.get();

            try{
                _User.setUsername(user.getUsername());
                _User.setEmail(user.getEmail());
                _User.setFirstname(user.getFirstname());
                _User.setAddress(user.getAddress());
                _User.setSurname(user.getSurname());
                _User.setCity(user.getCity());
                _User.setEmpscho(user.getEmpscho());
                _User.setGender(user.getGender());
                _User.setJmbg(user.getJmbg());
                _User.setOccupation(user.getOccupation());
                _User.setPhone(user.getPhone());
                if(centerProfile.isPresent())
                    _User.setCenter_profile(centerProfile.get());
            } catch (Exception e){
                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Error exception: " + e));
            }
            return new ResponseEntity<>(userRepository.save(_User), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    } */

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @PutMapping("/updatePassword/{id}")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<User> changePassword(@PathVariable("id") long id, @RequestBody UserDto userDto) {
        Optional<User> UserData = userRepository.findById(id);

        if (UserData.isPresent()) {
            User _User = UserData.get();
            if(encoder.matches(userDto.getPasswordOld(), _User.getPassword())){
                System.out.println("Old pass: "+ encoder.encode(_User.getPassword()) +
                                 "\nNew pass: " + encoder.encode(userDto.getPasswordNew()));
                _User.setPassword(encoder.encode(userDto.getPasswordNew()));
                userRepository.save(_User);
            }
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
