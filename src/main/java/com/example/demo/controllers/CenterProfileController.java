package com.example.demo.controllers;

import com.example.demo.models.CenterProfile;
import com.example.demo.security.services.CenterProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/centerProfile")
public class CenterProfileController {

    @Autowired
    CenterProfileService centerProfileService;

    @PostMapping("/update")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public boolean update(@RequestParam("id") Long id, @RequestBody CenterProfile centerProfile){
        try {
            return centerProfileService.update(id, centerProfile);
        }catch (Exception e){
            e.printStackTrace();
        }
        return false;
    }

}
