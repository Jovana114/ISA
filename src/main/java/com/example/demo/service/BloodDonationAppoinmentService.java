package com.example.demo.service;

import com.example.demo.models.BloodDonationAppointment;
import com.example.demo.repository.BloodDurationAppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class BloodDonationAppoinmentService {

    @Autowired
    BloodDurationAppointmentRepository repository;

    public List<BloodDonationAppointment> findAllByDate(String date){
        List<BloodDonationAppointment> list = repository.findByDate(date);
        if(!list.isEmpty()){
            Collections.sort(list);
            return list;
        }
        else return new ArrayList<>();
    }
    public List<BloodDonationAppointment> findAllByDateAndCenter(Long id,String date){
        List<BloodDonationAppointment> list = repository.findByDate(date);
        List<BloodDonationAppointment> newList = new ArrayList<>();
        if(!list.isEmpty()){
            Collections.sort(list);
            for (BloodDonationAppointment b:list) {
                if(b.getCenter_profile().getId()==id){
                    newList.add(b);
                }
            }
            Collections.sort(newList);
            return newList;
        }
        else return new ArrayList<>();
    }

    public List<BloodDonationAppointment> findAllByCentreProfile(Long id){
        List<BloodDonationAppointment> list = repository.findAll();
        List<BloodDonationAppointment> newList = new ArrayList<>();
        if(!list.isEmpty()){
            Collections.sort(list);
            for (BloodDonationAppointment b:list) {
                if(b.getCenter_profile().getId()==id){
                    newList.add(b);
                }
            }
            Collections.sort(newList);
            return newList;
        }
        else return new ArrayList<>();
    }
}
