package com.example.demo.service;

import com.example.demo.models.CenterProfile;
import com.example.demo.models.Role;
import com.example.demo.models.User;
import com.example.demo.repository.CenterProfileRepository;
import com.example.demo.security.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class CenterProfileService {


    @Autowired
    CenterProfileRepository centerProfileRepository;

    @Autowired
    UserDetailsServiceImpl userDetailsService;

    public CenterProfile findByName(String name) {
        return centerProfileRepository.findByName(name);
    }

}
