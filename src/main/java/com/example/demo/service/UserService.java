package com.example.demo.service;

import com.example.demo.models.CenterProfile;
import com.example.demo.models.User;
import com.example.demo.payload.response.UserResponse;
import com.example.demo.repository.CenterProfileRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CenterProfileRepository centerProfileRepository;

    public List<User> getAll(){
        return userRepository.findAll();
    }

    public User getOne(Long id){
        return userRepository.getOne(id);
    }

    public Set<User> getStaff(List<Long> ids){
        Set<User> usersToReturn = new HashSet<>();
        for (Long id: ids
             ) {
            usersToReturn.add(userRepository.getOne(id));
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
}

    //public List<User> findByNameOrSurnameContaining(String name){ return userRepository.findByFirstnameOrSurnameContaining(name, name);}





