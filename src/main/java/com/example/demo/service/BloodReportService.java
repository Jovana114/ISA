package com.example.demo.service;

import com.example.demo.models.BloodDonationAppointment;
import com.example.demo.models.BloodReport;
import com.example.demo.models.User;
import com.example.demo.repository.BloodDurationAppointmentRepository;
import com.example.demo.repository.BloodReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class BloodReportService {

    @Autowired
    BloodReportRepository rloodReportRepository;

    public BloodReport findByUser(Long id){
        List<BloodReport> bloodReportList = rloodReportRepository.findAll();
        BloodReport bloodReportFound = new BloodReport();
        if(!bloodReportList.isEmpty()) {
            for (BloodReport b : bloodReportList) {
                if (b.getUsers().getId() == id) {
                    bloodReportFound = b;
                }
            }
        }
        return bloodReportFound;
    }

}
