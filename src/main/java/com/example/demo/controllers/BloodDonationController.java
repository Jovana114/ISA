package com.example.demo.controllers;

import com.example.demo.models.BloodDonationAppointment;
import com.example.demo.models.CenterProfile;
import com.example.demo.models.User;
import com.example.demo.payload.response.BloodAppointmentResponse;
import com.example.demo.repository.BloodDurationAppointmentRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.BloodDonationAppoinmentService;
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
@RequestMapping("api/blood")
public class BloodDonationController {

    @Autowired
    BloodDurationAppointmentRepository repository;
    @Autowired
    BloodDonationAppoinmentService service;
    @Autowired
    UserRepository userRepository;

    // ============================================== //
    // get all for staff and admin assigned to center //
    @GetMapping("/all")
    @PreAuthorize("hasAuthority('ROLE_STAFF') or hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_USER') ")
    public ResponseEntity<?> allAppointments() {
        List<BloodDonationAppointment> bloodDonationAppointments = repository.findAll();
        if(!bloodDonationAppointments.isEmpty())
            return new ResponseEntity<>(bloodDonationAppointments, HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
    @GetMapping("/all/center/{id}")
    @PreAuthorize("hasAuthority('ROLE_STAFF') or hasAuthority('ROLE_ADMIN') ")
    public ResponseEntity<?> allAppointmentsAssignedToCentre(@PathVariable("id") Long id) {
        List<BloodDonationAppointment> bloodDonationAppointments = service.findAllByCentreProfile(id);
        if(!bloodDonationAppointments.isEmpty())
            return new ResponseEntity<>(bloodDonationAppointments, HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
    @GetMapping("/all/center/{id}/{date}")
    @PreAuthorize("hasAuthority('ROLE_STAFF') or hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<?> bloodAppointmentsByDateAndCenter(@PathVariable("id") Long id,@PathVariable("date") String date) {
        List<BloodDonationAppointment> bloodDonationAppointments = service.findAllByDateAndCenter(id, date);
        List<BloodAppointmentResponse> bloodAppointmentResponses = new ArrayList<>();
        if(!bloodDonationAppointments.isEmpty()){
            for (BloodDonationAppointment b: bloodDonationAppointments) {
                Optional<User> user = userRepository.findById(b.getUsers().getId());
                BloodAppointmentResponse _response = new BloodAppointmentResponse();
                if (user.isPresent()) {
                    User _user = user.get();
                    _response.setId(b.getId());
                    _response.setDate(b.getDate());
                    _response.setTime(b.getTime());
                    _response.setDuration(b.getDuration());
                    _response.setReserved(b.getReserved());
                    _response.setActive(b.getActive());
                    _response.setUserId(_user.getId());
                    _response.setFirst_name(_user.getFirstname());
                    _response.setLast_name(_user.getSurname());
                    _response.setEmail(_user.getEmail());
                } else {
                    _response.setId(b.getId());
                    _response.setDate(b.getDate());
                    _response.setTime(b.getTime());
                    _response.setDuration(b.getDuration());
                    _response.setReserved(b.getReserved());
                    _response.setActive(b.getActive());
                }
                bloodAppointmentResponses.add(_response);
            }
            return new ResponseEntity<>(bloodAppointmentResponses, HttpStatus.OK);
        }
//            return new ResponseEntity<>(bloodDonationAppointments, HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
