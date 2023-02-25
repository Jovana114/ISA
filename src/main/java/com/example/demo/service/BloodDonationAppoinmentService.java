package com.example.demo.service;

import com.example.demo.models.BloodDonationAppointment;
import com.example.demo.models.CenterProfile;
import com.example.demo.models.User;
import com.example.demo.payload.request.CreateBloodAppointment;
import com.example.demo.payload.response.BloodAppointmentResponse;
import com.example.demo.payload.response.MessageResponse;
import com.example.demo.repository.BloodDurationAppointmentRepository;
import com.example.demo.repository.CenterProfileRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class BloodDonationAppoinmentService {

    @Autowired
    BloodDurationAppointmentRepository repository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CenterProfileRepository centerProfileRepository;

    @Autowired
    UserService userService;

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

    public List<BloodAppointmentResponse> bloodAppointmentsByDateAndCenterService(Long id, String date) {
        List<BloodDonationAppointment> bloodDonationAppointments = findAllByDateAndCenter(id, date);
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
            return bloodAppointmentResponses;
        }
        else
            return null;
    }

    public List<BloodAppointmentResponse> searchBloodAppointmentsByDateAndCenter(Long id, String date, String search) {
        List<BloodDonationAppointment> bloodDonationAppointments = findAllByDateAndCenter(id, date);
        List<BloodAppointmentResponse> bloodAppointmentResponses = new ArrayList<>();
        if(!bloodDonationAppointments.isEmpty()){
            for (BloodDonationAppointment b: bloodDonationAppointments) {
                if (b.getUsers() != null) {
                    Optional<User> user = userRepository.findById(b.getUsers().getId());
                    BloodAppointmentResponse _response = new BloodAppointmentResponse();
                    if (user.isPresent()) {
                        User _user = user.get();
                        if (_user.getFirstname().contains(search) || _user.getSurname().contains(search)) {
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
            }
            return bloodAppointmentResponses;
        }
        else
            return null;
    }

    public BloodDonationAppointment createBloodAppointmentService(Long id, CreateBloodAppointment createBloodAppointment) {

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

            return bda;
        }
        return null;
    }

}
