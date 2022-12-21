package com.example.demo.controllers;

import com.example.demo.models.BloodDonationAppointment;
import com.example.demo.models.CenterProfile;
import com.example.demo.models.User;
import com.example.demo.payload.request.CenterRequest;
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
    UserService userService;
    @Autowired
    CenterProfileRepository centerProfileRepository;

    // ============================================== //
    // dugme kod appointmenta -> kreira report i povezati sve //
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
        List<BloodDonationAppointment> bloodDonationAppointments = service.findAllByDateAndCenter(id, date);
        List<BloodAppointmentResponse> bloodAppointmentResponses = new ArrayList<>();
        if(!bloodDonationAppointments.isEmpty()){
            for (BloodDonationAppointment b: bloodDonationAppointments) {
                BloodAppointmentResponse _response = new BloodAppointmentResponse();
                if(b.getUsers() != null){
                    Optional<User> user = userRepository.findById(b.getUsers().getId());
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
                    }
                }
                else {
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
        else
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/all/center/{id}/{date}/{search}")
    @PreAuthorize("hasAuthority('ROLE_STAFF') or hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<?> searchBloodAppointmentsByDateAndCenter(@PathVariable("id") Long id,@PathVariable("date") String date, @PathVariable("search") String search) {
        List<BloodDonationAppointment> bloodDonationAppointments = service.findAllByDateAndCenter(id, date);
        List<BloodAppointmentResponse> bloodAppointmentResponses = new ArrayList<>();
        if(!bloodDonationAppointments.isEmpty()){
            for (BloodDonationAppointment b: bloodDonationAppointments) {
                Optional<User> user = userRepository.findById(b.getUsers().getId());
                BloodAppointmentResponse _response = new BloodAppointmentResponse();
                if (user.isPresent()) {
                    User _user = user.get();
                    if(_user.getFirstname().contains(search) || _user.getSurname().contains(search)){
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
                        bloodAppointmentResponses.add(_response);
                    }
                }
            }
            return new ResponseEntity<>(bloodAppointmentResponses, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
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

        Optional<CenterProfile> centerProfile = centerProfileRepository.findById(id);
        if(centerProfile.isPresent()){

            BloodDonationAppointment bda = new BloodDonationAppointment(createBloodAppointment.getDate(),
                    createBloodAppointment.getTime(), createBloodAppointment.getDuration(), false, false,
                    centerProfile.get());

            Set<User> newList = new HashSet<>();
            Set<User> uu = userService.getStaff(createBloodAppointment.getUsers());
            for (User user: uu) {
                newList.add(user);
            }
            bda.setUserStaff(newList);

            repository.save(bda);
        }

        return ResponseEntity.ok(new MessageResponse("Appointment created!"));
    }
}
