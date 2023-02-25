package com.example.demo.controllers;

import com.example.demo.dto.UserDto;
import com.example.demo.models.User;
import com.example.demo.payload.response.MessageResponse;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.AdminCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/adminCenter")
public class AdminCenterController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    AdminCenterService adminCenterService;
    
    @PutMapping("/update/{id}")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> updateAdminCenter(@PathVariable("id") Long id, @RequestBody User user) {
        Optional<User> UserData = userRepository.findById(id);

        if (UserData.isPresent()) {
            User _User = UserData.get();

            try {
                _User = adminCenterService.updateAdminCenterService(_User, user);
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

    @PutMapping("/updatePassword/{id}")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<User> changePassword(@PathVariable("id") long id, @RequestBody UserDto userDto) {
        Optional<User> UserData = userRepository.findById(id);

        if (UserData.isPresent()) {
            User _User = UserData.get();
            _User = adminCenterService.changePasswordService(_User, userDto);
            return new ResponseEntity<>(userRepository.save(_User), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getUsers/{data}")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> getUsersByUsernameOrEmail(@PathVariable("data") String data){
        List<User> listOfUsers = userRepository.findByUsernameContainingOrEmailContaining(data, data);
        if(!listOfUsers.isEmpty())
            return new ResponseEntity<>(listOfUsers, HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/addPoints/{id}")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> addPoints(@PathVariable("id") Long id){
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()) {
            User _user = user.get();
            _user = adminCenterService.addPointsService(_user);
            userRepository.save(_user);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/addPenals/{id}")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> addPenals(@PathVariable("id") Long id){
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()) {
            User _user = user.get();
            _user = adminCenterService.addPenlsService(_user);
            userRepository.save(_user);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
