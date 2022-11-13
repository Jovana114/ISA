package com.example.demo.security.services;

import com.example.demo.models.CenterProfile;
import com.example.demo.models.Role;
import com.example.demo.models.User;
import com.example.demo.repository.CenterProfileRepository;
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


    public boolean update(Long id, CenterProfile centerProfile) {
        Optional<CenterProfile> centerProfileOpt = centerProfileRepository.findById(id);
        if (centerProfile == null) {
            return false;
        }

        CenterProfile centerProfile1 = centerProfileOpt.get();

        centerProfile1.setName(centerProfile.getName());
        centerProfile1.setAddress(centerProfile.getAddress());
        centerProfile1.setDescription(centerProfile.getDescription());
        centerProfile1.setAverageRating(centerProfile.getAverageRating());
        centerProfile1.setAppointmentEnd(centerProfile.getAppointmentEnd());
        centerProfile1.setAppointmentEnd(centerProfile.getAppointmentEnd());

        List<User> users = new ArrayList<User>();

        for (User user: centerProfile.getUserObjs()) {
            user = (User)userDetailsService.loadUserByUsername(user.getUsername());
            for(Role role: user.getRoles()) {
                if (role == Arrays.asList("staff".split(", "))) {
                    users.add(user);
                }
            }
        }

        centerProfileRepository.save(centerProfile1);

        return true;
    }


}
