package com.example.demo.controllers;

import com.example.demo.models.CenterProfile;
import com.example.demo.repository.CenterProfileRepository;
import com.example.demo.service.CenterProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api")
public class CenterProfileController {

    @Autowired
    CenterProfileService centerProfileService;

    @Autowired
    CenterProfileRepository centerProfileRepository;

    @PutMapping("/centerProfile/update/{id}")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<CenterProfile> updateCenterProfile(@PathVariable("id") long id, @RequestBody CenterProfile centerProfile) {
        Optional<CenterProfile> CenterProfileData = centerProfileRepository.findById(id);

        if (CenterProfileData.isPresent()) {
            CenterProfile _CenterProfile = CenterProfileData.get();
            _CenterProfile.setName(centerProfile.getName());
            _CenterProfile.setAddress(centerProfile.getAddress());
            _CenterProfile.setDescription(centerProfile.getDescription());
            _CenterProfile.setAverageRating(centerProfile.getAverageRating());
            _CenterProfile.setAppointmentEnd(centerProfile.getAppointmentEnd());
            return new ResponseEntity<>(centerProfileRepository.save(_CenterProfile), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/centres")
    @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<?> allCentres() {
        List<CenterProfile> centres = centerProfileRepository.findAll();
        if(!centres.isEmpty())
            return new ResponseEntity<>(centres, HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/centres/search/{searchData}")
    @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<?> searchCentresByNameOrAddress(@PathVariable("searchData") String searchData) {
        List<CenterProfile> centres = centerProfileRepository.findByNameOrAddressContaining(searchData, searchData);
        if(!centres.isEmpty())
            return new ResponseEntity<>(centres, HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


}
