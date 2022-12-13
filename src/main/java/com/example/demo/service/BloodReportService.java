package com.example.demo.service;

import com.example.demo.models.BloodDonationAppointment;
import com.example.demo.models.BloodReport;
import com.example.demo.models.User;
import com.example.demo.repository.BloodDurationAppointmentRepository;
import com.example.demo.repository.BloodReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BloodReportService {

    @Autowired
    BloodReportRepository bloodReportRepository;

    public BloodReport findByUserAndAppointment(Long userId, Long bloodAppointmentId){
        List<BloodReport> bloodReportList = bloodReportRepository.findAll();
        BloodReport bloodReportFound = new BloodReport();
        if(!bloodReportList.isEmpty()) {
            for (BloodReport b : bloodReportList) {
                if (b.getUsers().getId() == userId && b.getBlood_appointments().getId() == bloodAppointmentId) {
                    bloodReportFound = b;
                }
            }
        }
        return bloodReportFound;
    }

}
