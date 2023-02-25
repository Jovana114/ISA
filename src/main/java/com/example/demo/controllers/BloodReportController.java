package com.example.demo.controllers;

import com.example.demo.models.BloodReport;
import com.example.demo.payload.request.UpdateReportAdminCenterRequest;
import com.example.demo.payload.request.UpdateReportUserRequest;
import com.example.demo.repository.BloodReportRepository;
import com.example.demo.service.BloodReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/bloodReport")
public class BloodReportController {

    @Autowired
    BloodReportRepository bloodReportRepository;

    @Autowired
    BloodReportService bloodReportService;

    @GetMapping("/getUserPartOfReport/{centerId}_{bloodAppointmentId}")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> getUSerPartOfBloodReport(@PathVariable("centerId") Long centerId, @PathVariable("bloodAppointmentId") Long bloodAppointmentId) {
        return bloodReportService.getUSerPartOfBloodReportService(centerId, bloodAppointmentId);
    }

    @GetMapping("/findByUserId/{appId}_{userId}")
    @PreAuthorize("hasAuthority('ROLE_STAFF') or hasAuthority('ROLE_USER')")
    public ResponseEntity<?> findByUser(@PathVariable Long userId, @PathVariable long appId)
    {
        List<BloodReport> bloodReports = bloodReportRepository.findAll();

        if(!bloodReports.isEmpty()) {
            for (BloodReport blr: bloodReports) {
                if(blr.getBlood_appointments().getId() == appId && blr.getUsers().getId() == userId){
                    return new ResponseEntity<>(blr, HttpStatus.OK);
                }
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/createBloodReport/{appointmentId}/{userId}")
    @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> createBloodReport(@RequestBody BloodReport bloodReport, @PathVariable("appointmentId") Long appointmentId, @PathVariable("userId") Long userId) {
        return bloodReportService.createBloodReportService(bloodReport, appointmentId, userId);
    }

    @PutMapping("/updateBloodReport/{centerId}_{bloodAppointmentId}")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> updateBloodReportByStaff(@PathVariable("centerId") Long centerId, @PathVariable("bloodAppointmentId") Long bloodAppointmentId, @RequestBody UpdateReportAdminCenterRequest updateReportAdminCenterRequest) {
            return bloodReportService.updateBloodReportByStaffService(centerId, bloodAppointmentId, updateReportAdminCenterRequest);
    }

    @PutMapping("/updateBloodReportByUser/{id}")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public ResponseEntity<?> updateBloodReportByUser(@PathVariable("id") Long id, @RequestBody UpdateReportUserRequest updateReportUserRequest) {
            return bloodReportService.updateBloodReportByUserSerevice(id, updateReportUserRequest);
    }

}
