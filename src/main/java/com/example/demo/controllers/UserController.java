package com.example.demo.controllers;

import com.example.demo.models.*;
import com.example.demo.payload.request.AdminRequest;

import com.example.demo.payload.response.MessageResponse;
import com.example.demo.repository.CenterProfileRepository;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;

import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Set;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/user")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    CenterProfileRepository centerProfileRepository;

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> getUserById(@PathVariable("id") Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent())
            return ResponseEntity.ok(user);
        return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Error: no user found"));
    }

    @PutMapping("/update/{id}")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public ResponseEntity<?> updateUser(@PathVariable("id") long id, @RequestBody EditUser editUser) {
        Optional<User> user = userRepository.findById(id);

        if (user.isPresent()) {
            User _user = user.get();
            _user.setAddress(editUser.getAddress());
            _user.setCity(editUser.getCity());
            _user.setState(editUser.getState());
            _user.setEmpscho(editUser.getEmpscho());
            _user.setFirstname(editUser.getFirstname());
            _user.setSurname(editUser.getSurname());
            _user.setUsername(editUser.getUsername());
            _user.setGender(editUser.getGender());
            _user.setJmbg(editUser.getJmbg());
            _user.setOccupation(editUser.getOccupation());
            _user.setPhone(editUser.getPhone());
            userRepository.save(_user);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/adminupdate/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<?> aupdateUser(@PathVariable("id") long id, @RequestBody AdminRequest aReq) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            User _user = user.get();
            Set<Role> roles = _user.getRoles();
            Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            Role staffRole = roleRepository.findByName(ERole.ROLE_STAFF).orElseThrow(() -> new RuntimeException("Error: Role is not found."));

            if(aReq.getStaffadmin()==0)
            {
                roles.add(staffRole);
                Optional<CenterProfile> cp = centerProfileRepository.findById(aReq.getCenter());
                if(cp.isPresent()){
                    CenterProfile cpp = cp.get();
                    _user.setCenter_profile(cpp);
                }


            }
            else {
                roles.add(adminRole);
            }
            _user.setRoles(roles);



            userRepository.save(_user);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
