package com.example.demo.controllers;

import com.example.demo.models.BloodDonationAppointment;
import com.example.demo.payload.request.CreateBloodAppointment;
import com.example.demo.payload.response.BloodAppointmentResponse;
import com.example.demo.payload.response.MessageResponse;
import com.example.demo.repository.BloodDurationAppointmentRepository;
import com.example.demo.repository.CenterProfileRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.BloodDonationAppoinmentService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.*;

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

    @Autowired
    CenterProfileRepository centerProfileRepository;

    @Autowired
    UserService userService;

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
    @PreAuthorize("hasAuthority('ROLE_STAFF') or hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_USER')")
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
        List<BloodAppointmentResponse> bloodAppointmentResponses = service.bloodAppointmentsByDateAndCenterService(id, date);
        if(!bloodAppointmentResponses.isEmpty()) {
            return new ResponseEntity<>(bloodAppointmentResponses, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/all/center/{id}/{date}/{search}")
    @PreAuthorize("hasAuthority('ROLE_STAFF') or hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<?> searchBloodAppointmentsByDateAndCenter(@PathVariable("id") Long id,@PathVariable("date") String date, @PathVariable("search") String search) {
        List<BloodAppointmentResponse> bloodAppointmentResponses = service.searchBloodAppointmentsByDateAndCenter(id, date, search);
        if(!bloodAppointmentResponses.isEmpty()) {
            return new ResponseEntity<>(bloodAppointmentResponses, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/createBloodAppointment/{id}")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> createBloodAppointment(@PathVariable("id") Long id, @RequestBody CreateBloodAppointment createBloodAppointment)
    {
        if(repository.existsByDate(createBloodAppointment.getDate()) && repository.existsByTime(createBloodAppointment.getTime())){
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Appointement is already taken!"));
        }

        BloodDonationAppointment bda = service.createBloodAppointmentService(id, createBloodAppointment);
        if(bda != null) {
            return ResponseEntity.ok(new MessageResponse("Appointment created!"));
        } else
        {
            return ResponseEntity.ok(new MessageResponse("False!"));
        }
    }
}
