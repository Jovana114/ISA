package com.example.demo.service;

import com.example.demo.models.*;
import com.example.demo.payload.request.AdminRequest;
import com.example.demo.payload.response.UserResponse;
import com.example.demo.payload.response.UserResponseWithBloodAppointement;
import com.example.demo.repository.BloodDurationAppointmentRepository;
import com.example.demo.repository.CenterProfileRepository;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.*;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CenterProfileRepository centerProfileRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    BloodDurationAppointmentRepository bloodDurationAppointmentRepository;

    public List<User> getAll(){
        return userRepository.findAll();
    }

    public User getOne(Long id){
        return userRepository.getOne(id);
    }

    public Set<User> getStaff(List<String> usernames){
        Set<User> usersToReturn = new HashSet<>();
        for (String username: usernames
             ) {
            usersToReturn.add(userRepository.findByUsernameContaining(username));
        }
        return usersToReturn;
    }

    public boolean changeUserCenterId(Long id, Long idc){

        Optional<User> uu = userRepository.findById(id);
        Optional<CenterProfile> cpp = centerProfileRepository.findById(idc);
        System.out.println("AAAAAAAA");
        if(uu.isPresent() && cpp.isPresent()){
            User u = uu.get();
            CenterProfile cp = cpp.get();
            u.setCenter_profile(cp);
            userRepository.save(u);

            }

        return true;

    }

    public User updateUser(User toBeUpdated, EditUser editUser) {

        toBeUpdated.setAddress(editUser.getAddress());
        toBeUpdated.setCity(editUser.getCity());
        toBeUpdated.setState(editUser.getState());
        toBeUpdated.setEmpscho(editUser.getEmpscho());
        toBeUpdated.setFirstname(editUser.getFirstname());
        toBeUpdated.setSurname(editUser.getSurname());
        toBeUpdated.setUsername(editUser.getUsername());
        toBeUpdated.setGender(editUser.getGender());
        toBeUpdated.setJmbg(editUser.getJmbg());
        toBeUpdated.setOccupation(editUser.getOccupation());
        toBeUpdated.setPhone(editUser.getPhone());

        return toBeUpdated;
    }

    public List<UserResponseWithBloodAppointement> getAllRegistertedUsersByCenterService(Long centerId) {
        List<UserResponseWithBloodAppointement> listOfUsersWithBloodAppointment = new ArrayList<>();
        List<BloodDonationAppointment> allBloodDonationAppointments = bloodDurationAppointmentRepository.findAll();

        for (BloodDonationAppointment bla: allBloodDonationAppointments) {
            if(bla.getUsers() != null) {
                for (User user : userRepository.findAll()) {
                    if (user.getId() == bla.getUsers().getId() && bla.getCenter_profile().getId() == centerId && bla.getActive()) {
                        UserResponseWithBloodAppointement userResponseWithBloodAppointement = new UserResponseWithBloodAppointement(
                                user.getUsername(), user.getEmail(), user.getFirstname(), user.getSurname(), user.getAddress(),
                                user.getPhone(), user.getJmbg(), user.getGender(), bla.getDate(), bla.getTime());
                        listOfUsersWithBloodAppointment.add(userResponseWithBloodAppointement);
                    }
                }
            }
        }

        return listOfUsersWithBloodAppointment;
    }
}