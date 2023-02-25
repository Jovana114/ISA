package com.example.demo.controllers;

import com.example.demo.models.*;
import com.example.demo.payload.request.AdminRequest;

import com.example.demo.payload.response.MessageResponse;
import com.example.demo.payload.response.UserResponse;
import com.example.demo.payload.response.UserResponseWithBloodAppointement;
import com.example.demo.repository.*;
import com.example.demo.service.BloodDonationAppoinmentService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/user")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @Autowired
    CenterProfileRepository centerProfileRepository;

    @Autowired
    BloodDurationAppointmentRepository bloodDurationAppointmentRepository;

    @Autowired
    BloodReportRepository bloodReportRepository;

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> getUserById(@PathVariable("id") Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent())
            return ResponseEntity.ok(user);
        return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Error: no user found"));
    }

    @PutMapping("/update/{id}")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public ResponseEntity<?> updateUser(@PathVariable("id") long id, @RequestBody EditUser editUser) {
        Optional<User> user = userRepository.findById(id);

        if (user.isPresent()) {
            User _user = user.get();
            _user = userService.updateUser(_user, editUser);
            userRepository.save(_user);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getall")
    @PreAuthorize(" hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> getAllUsers(){
        List<User> listOfUsers = userService.getAll();
        return ResponseEntity.ok(listOfUsers);
    }

    @GetMapping("/getCentreByUserId/{id}")
    public ResponseEntity<?> getCentreByUserId(@PathVariable("id") Long id) {
        Optional<User> user = userRepository.findById(id);
            if(user.isPresent()){
                Optional<CenterProfile> centerProfile = centerProfileRepository.findById(user.get().getCenter_profile().getId());
                if(centerProfile.isPresent()){
                    return ResponseEntity.ok(centerProfile);
                }
            }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/getByName/{searchData}")
    @PreAuthorize(" hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> getByName(@PathVariable("searchData") String searchData) {
        List<User> listOfUsers = userRepository.findByFirstnameContainingOrSurnameContaining(searchData, searchData);
        if(!listOfUsers.isEmpty())
            return new ResponseEntity<>(listOfUsers, HttpStatus.OK);
        return new ResponseEntity<>(listOfUsers,HttpStatus.ACCEPTED);
    }

    @GetMapping("/blood-appointment/find/{date}/{time}")
    @PreAuthorize(" hasAuthority('ROLE_USER')")
    public ResponseEntity<?> findAppointments(@PathVariable("date") String date, @PathVariable("time") String time){
        List<BloodDonationAppointment> bloodDonationAppointments = bloodDurationAppointmentRepository.findByReservedFalseAndDateAndTime(date,time);
        if(!bloodDonationAppointments.isEmpty()) {
            List<Optional<CenterProfile>> centerProfileList = new ArrayList<>();
            for (BloodDonationAppointment b : bloodDonationAppointments) {
                centerProfileList.add(centerProfileRepository.findById(b.getCenter_profile().getId()));
            }
            if (!centerProfileList.isEmpty())
                return new ResponseEntity<>(centerProfileList, HttpStatus.OK);
        }
        return new ResponseEntity<>(bloodDonationAppointments,HttpStatus.ACCEPTED);
    }

    @PutMapping("/blood-appointment/reserve/{appointmentId}/{userId}")
    @PreAuthorize(" hasAuthority('ROLE_USER')")
    public ResponseEntity<?> reserveAppointments(@PathVariable("appointmentId") Long appointmentId, @PathVariable("userId") Long userId){
        Optional<BloodDonationAppointment> appointment = bloodDurationAppointmentRepository.findById(appointmentId);
        if (appointment.isPresent()) {
            BloodDonationAppointment _appointment = appointment.get();
            Optional<User> _user = userRepository.findById(userId);
            _appointment.setReserved(true);
            return ResponseEntity.ok(bloodDurationAppointmentRepository.save(_appointment));
        }
        return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Error: no appointment found"));
    }

    @GetMapping("/blood-appointment/assigned/{userId}")
    @PreAuthorize(" hasAuthority('ROLE_USER') or hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> assignedAppointments(@PathVariable("userId") Long userId){
        Optional<User> user = userRepository.findById(userId);

        if(user.isPresent()){
            List<BloodDonationAppointment> bloodDonationAppointments = user.get().getAppointments();
            if(!bloodDonationAppointments.isEmpty()) {
                return new ResponseEntity<>(bloodDonationAppointments, HttpStatus.OK);
            }
        }
        return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Error: no appointment found"));
    }

    @GetMapping("/getalluserresponses/{centerId}_{userId}")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> getAllUserResponeses(@PathVariable("centerId") Long centerId, @PathVariable("userId") Long userId){
        List<BloodReport> bloodReports = bloodReportRepository.findAll();
        List<BloodReport> bloodReportList = new ArrayList<>();

        for (BloodReport bl: bloodReports
             ) {
                if (bl.getCenter_profile().getId() == centerId && bl.getUsers().getId() == userId){
                    bloodReportList.add(bl);
                }
        }

        return ResponseEntity.ok(bloodReportList);
    }

    @GetMapping("/getByUsername/{searchData}")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> getByUsername(@PathVariable("searchData") String searchData) {
        User listOfUsers = userRepository.findByUsernameContaining(searchData);
        return new ResponseEntity<>(listOfUsers, HttpStatus.OK);
    }

    @GetMapping("/getAllRegistertedUsersByCenter/{centerId}")
    @PreAuthorize("hasAuthority('ROLE_STAFF') or hasAuthority('ROLE_USER')")
    public List<UserResponseWithBloodAppointement> getAllRegistertedUsersByCenter(@PathVariable("centerId") Long centerId) {
        List<UserResponseWithBloodAppointement> listOfUsersWithBloodAppointment = userService.getAllRegistertedUsersByCenterService(centerId);
        return listOfUsersWithBloodAppointment;
    }
//
//    @PutMapping("/adminupdate/{id}")
//    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
//    public ResponseEntity<?> aupdateUser(@PathVariable("id") long id, @RequestBody AdminRequest aReq) {
//        Optional<User> user = userRepository.findById(id);
//        if (user.isPresent()) {
//            User _user = user.get();
//            Set<Role> roles = _user.getRoles();
//            Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
//            Role staffRole = roleRepository.findByName(ERole.ROLE_STAFF).orElseThrow(() -> new RuntimeException("Error: Role is not found."));
//
//            if(aReq.getStaffadmin()==0)
//            {
//                roles.add(staffRole);
//                Optional<CenterProfile> cp = centerProfileRepository.findById(aReq.getCenter());
//                if(cp.isPresent()){
//                    CenterProfile cpp = cp.get();
//                    _user.setCenter_profile(cpp);
//                }
//            }
//            else {
//                roles.add(adminRole);
//            }
//            _user.setRoles(roles);
//            userRepository.save(_user);
//            return new ResponseEntity<>(HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

}
