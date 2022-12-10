package com.example.demo.controllers;

import com.example.demo.models.CenterProfile;
import com.example.demo.models.User;
import com.example.demo.payload.request.CenterRequest;
import com.example.demo.payload.response.MessageResponse;
import com.example.demo.repository.CenterProfileRepository;
import com.example.demo.service.CenterProfileService;
import com.example.demo.service.UserService;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/centerProfile")
@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"})
public class CenterProfileController {

    @Autowired
    CenterProfileService centerProfileService;

    @Autowired
    CenterProfileRepository centerProfileRepository;

    @Autowired
    UserService userService;
    
    @PutMapping("/updateCenterProfile/{id}")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<CenterProfile> updateCenterProfile(@PathVariable("id") long id, @RequestBody CenterProfile centerProfile) {
        Optional<CenterProfile> CenterProfileData = centerProfileRepository.findById(id);

        if (CenterProfileData.isPresent()) {
            CenterProfile _CenterProfile = CenterProfileData.get();
            _CenterProfile.setName(centerProfile.getName());
            _CenterProfile.setAddress(centerProfile.getAddress());
            _CenterProfile.setDescription(centerProfile.getDescription());
            _CenterProfile.setAverageRating(centerProfile.getAverageRating());
            return new ResponseEntity<>(centerProfileRepository.save(_CenterProfile), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/create/")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> createCenterProfile(@RequestBody CenterRequest cr)
    {
        if(centerProfileRepository.existsByName(cr.getName())){
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Name is already taken!"));
        }
        CenterProfile cp = new CenterProfile(cr.getName(), cr.getAddress(), cr.getDescription(), cr.getAverageRating(), 0, 0, 0, 0);
        List<User> newList = new ArrayList<User>();
        User uu = userService.getOne(cr.getCentreAdmin());
        newList.add(uu);
        cp.setUsers(newList);



        centerProfileRepository.save(cp);
        userService.changeUserCenterId(cr.getCentreAdmin(), cp.getId());

        return ResponseEntity.ok(new MessageResponse("Center registered successfully!"));
    }
    @GetMapping("/all")
//    @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<?> allCentres() {
        List<CenterProfile> centres = centerProfileRepository.findAll();
        if(!centres.isEmpty())
            return new ResponseEntity<>(centres, HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/all/search/{searchData}")
//    @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<?> searchCentresByNameOrAddress(@PathVariable("searchData") String searchData) {
        List<CenterProfile> centres = centerProfileRepository.findByNameContainingOrAddressContaining(searchData, searchData);
        if(!centres.isEmpty())
            return new ResponseEntity<>(centres, HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @GetMapping("/all/search/{searchData}/{rating}")
//    @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<?> searchCentresByNameOrAddressWithFilterRatng(@PathVariable("searchData") String searchData, @PathVariable("rating") Double rating) {
        List<CenterProfile> centres = centerProfileRepository.findByAverageRatingAndNameContainingOrAddressContaining(rating, searchData, searchData);
        if(!centres.isEmpty())
            return new ResponseEntity<>(centres, HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @GetMapping("/all/search-rating/{rating}")
//    @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<?> searchCentresByfindByAverageRating(@PathVariable("rating") Double rating) {
        List<CenterProfile> centres = centerProfileRepository.findByAverageRating(rating);
        if(!centres.isEmpty())
            return new ResponseEntity<>(centres, HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


}
