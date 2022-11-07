package com.example.demo.controller;

import com.example.demo.auth.AuthRequest;
import com.example.demo.dto.UserDetailsDto;
import com.example.demo.service.ObjUserDetailsService;
import com.example.demo.service.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/authenticate")
public class AuthentificationController {

//    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private ObjUserDetailsService userDetailsService;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> createAuthToken(@RequestBody AuthRequest authenticationRequest) throws Exception
    {
        try
        {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmailAddress(), authenticationRequest.getPassword()));
        }
        catch (BadCredentialsException e)
        {
            throw new Exception("Nepostojeca email adresa ili netacan password");
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getEmailAddress());

        final String jwt = jwtUtil.generateToken(userDetails);
        UserDetailsDto usersDetailsDTO = userDetailsService.getUsersDetails(authenticationRequest.getEmailAddress());
        usersDetailsDTO.setJwt(jwt);

        return ResponseEntity.ok(usersDetailsDTO);
    }

}
