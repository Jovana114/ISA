package com.example.demo.controllers;

import java.util.*;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.example.demo.models.*;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.example.demo.payload.request.LoginRequest;
import com.example.demo.payload.request.SignupRequest;
import com.example.demo.payload.response.JwtResponse;
import com.example.demo.payload.response.MessageResponse;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.jwt.JwtUtils;
import com.example.demo.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class AuthController {
  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UserService userService;
  @Autowired
  UserRepository userRepository;

  @Autowired
  RoleRepository roleRepository;

  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;

  @PostMapping("/auth/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);
    String jwt = jwtUtils.generateJwtToken(authentication);

    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
    List<String> roles = userDetails.getAuthorities().stream()
        .map(item -> item.getAuthority())
        .collect(Collectors.toList());

    User user = userService.getOne(userDetails.getId());

    return ResponseEntity.ok(new JwtResponse(
            jwt,user.getId(),
            user.getUsername(),
            user.getEmail(),
            user.getFirstname(),
            user.getSurname(),
            user.getAddress(),
            user.getCity(),
            user.getState(),
            user.getPhone(),
            user.getJmbg(),
            user.getGender(),
            user.getOccupation(),
            user.getEmpscho(),
            roles));
  }

  @PostMapping("/auth/signup")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity
          .badRequest()
          .body(new MessageResponse("Error: Username is already taken!"));
    }

    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
      return ResponseEntity
          .badRequest()
          .body(new MessageResponse("Error: Email is already in use!"));
    }

    // Create new user's account
    //User user = new User(signUpRequest.getUsername(),
    //           signUpRequest.getEmail(),
    //           encoder.encode(signUpRequest.getPassword()));
    User user = new User(signUpRequest.getUsername(),
            signUpRequest.getEmail(),
            encoder.encode(signUpRequest.getPassword()),
            signUpRequest.getFirstname(), signUpRequest.getSurname(), signUpRequest.getAddress(),
            signUpRequest.getCity(), signUpRequest.getState(), signUpRequest.getPhone(), signUpRequest.getJmbg(), signUpRequest.getGender(),
            signUpRequest.getOccupation(), signUpRequest.getEmpscho());
    String strRole = signUpRequest.getRole();
    Set<Role> roles = new HashSet<>();
    System.out.println(roles);

    Set<String> strRoles = new HashSet<String>(Arrays.asList(strRole.split(", ")));

    if (strRoles == null) {
      Role userRole = roleRepository.findByName(ERole.ROLE_USER)
          .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
      roles.add(userRole);
    } else {
      strRoles.forEach(role -> {
        switch (role) {
        case "admin":
          Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(adminRole);

          break;
        case "staff":
          Role modRole = roleRepository.findByName(ERole.ROLE_STAFF)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(modRole);

          break;
        default:
          Role userRole = roleRepository.findByName(ERole.ROLE_USER)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(userRole);
        }
      });
    }

    user.setRoles(roles);
    userRepository.save(user);

    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
  }

  @GetMapping("/user/{id}")
  @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_STAFF')")
  public ResponseEntity<?> getUserById(@PathVariable ("id") Long id){
    User user = userService.getOne(id);
    if (user != null)
      return ResponseEntity.ok(user);
    return ResponseEntity
            .badRequest()
            .body(new MessageResponse("Error: no user found"));
  }

//  @PutMapping("/user/{id}")
//  public ResponseEntity<?> updateUser(@Valid @RequestBody SignupRequest signUpRequest) {
//    try {
//      User user = userRepository.findByEmail(signUpRequest.getEmail());
//      user.updateData(user, signUpRequest.getUsername(),
//              signUpRequest.getFirstname(), signUpRequest.getSurname(), signUpRequest.getAddress(),
//              signUpRequest.getCity(), signUpRequest.getState(), signUpRequest.getPhone(), signUpRequest.getJmbg(), signUpRequest.getGender(),
//              signUpRequest.getOccupation(), signUpRequest.getEmpscho());
//      userRepository.save(user);
//    } catch (Exception e) {
//      return ResponseEntity
//              .badRequest()
//              .body(new MessageResponse("Error: failed to update user!\n" + e));
//    }
//    return ResponseEntity
//            .ok()
//            .body(new MessageResponse("User successfully updated!"));
//  }

  @PutMapping("/user/update/{id}")
  @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_STAFF')")
  public ResponseEntity<User> updateUser(@PathVariable("id") long id, @RequestBody EditUser editUser) {
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
      return new ResponseEntity<>(userRepository.save(_user), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
}
