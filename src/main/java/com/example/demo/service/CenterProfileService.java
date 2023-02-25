package com.example.demo.service;

import com.example.demo.controllers.UserController;
import com.example.demo.models.CenterProfile;
import com.example.demo.models.Mark;
import com.example.demo.models.Role;
import com.example.demo.models.User;
import com.example.demo.payload.request.MarkRequest;
import com.example.demo.payload.response.UserResponseWithBloodAppointement;
import com.example.demo.repository.CenterProfileRepository;
import com.example.demo.repository.MarkRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class CenterProfileService {

    @Autowired
    CenterProfileRepository centerProfileRepository;

    @Autowired
    UserController userController;

    @Autowired
    UserRepository userRepository;

    @Autowired
    MarkRepository markRepository;

    @Autowired
    MarkService markService;

    public CenterProfile findByName(String name) {
        return centerProfileRepository.findByName(name);
    }

    public CenterProfile updateCenterProfileService(CenterProfile _CenterProfile, CenterProfile centerProfile) {

        _CenterProfile.setName(centerProfile.getName());
        _CenterProfile.setAddress(centerProfile.getAddress());
        _CenterProfile.setDescription(centerProfile.getDescription());
        _CenterProfile.setAverageRating(centerProfile.getAverageRating());
        _CenterProfile.setBloodA(centerProfile.getBloodA());
        _CenterProfile.setBloodB(centerProfile.getBloodB());
        _CenterProfile.setBloodAB(centerProfile.getBloodAB());
        _CenterProfile.setBloodO(centerProfile.getBloodO());
        _CenterProfile.setSyringes_number(centerProfile.getSyringes_number());
        _CenterProfile.setGloves_number(centerProfile.getGloves_number());
        _CenterProfile.setBag_lot_number(centerProfile.getBag_lot_number());

        return _CenterProfile;
    }

    public ResponseEntity<?> markCenterFunService(Long userId, MarkRequest markRequest){
        CenterProfile centerProfile = centerProfileRepository.findByName(markRequest.getCenter_profile_name());
        Optional<User> regUser = userRepository.findById(userId);

        if(markRequest.getMark() > 5 || markRequest.getMark() < 1){
            return new ResponseEntity<>("You can set marks from 1 to 5.", HttpStatus.NOT_FOUND);
        }

        double temp = 0.0;
        int t = 0;

        if(regUser.isPresent() && centerProfile != null) {
            User _regUserFound = regUser.get();
            CenterProfile _centerProfile = centerProfile;

            List<UserResponseWithBloodAppointement> registertedUsers = userController.getAllRegistertedUsersByCenter(_centerProfile.getId());

            for (UserResponseWithBloodAppointement ur : registertedUsers) {
                if (_regUserFound.getUsername().equals(ur.getUsername()) && _regUserFound.getEmail().equals(ur.getEmail())) {
                    if(_regUserFound.isMarked_center() == false || _regUserFound.isMarked_center() == null) {
                        _regUserFound.setMarked_center(true);

                        Mark mark1 = new Mark(markRequest.getMark(), _centerProfile.getId(), _regUserFound.getId());
                        markRepository.save(mark1);

                        for (Mark mark : markRepository.findAll()) {
                            if(mark.getCenterProfile().equals(_centerProfile.getId())) {
                                temp = temp + mark.getMark();
                                t = t + 1;
                            }
                        }
                        _centerProfile.setAverageRating(temp / t);
                        centerProfileRepository.save(_centerProfile);
                        return new ResponseEntity<>("Center marked successfully", HttpStatus.OK);
                    } else {

                        Mark mark1 = markService.findByCenterAndUser(_centerProfile, _regUserFound);
                        if(mark1 != null) {
                            mark1.setMark(markRequest.getMark());
                            markRepository.save(mark1);

                            for (Mark mark : markRepository.findAll()) {
                                if (mark.getCenterProfile().equals(_centerProfile.getId())) {
                                    temp = temp + mark.getMark();
                                    t = t + 1;
                                }
                            }
                            _centerProfile.setAverageRating(temp / t);
                            centerProfileRepository.save(_centerProfile);
                            return new ResponseEntity<>("Center mark successfully updated.", HttpStatus.OK);
                        } else {
                            Mark mark11 = new Mark(markRequest.getMark(), _centerProfile.getId(), _regUserFound.getId());
                            markRepository.save(mark11);

                            for (Mark mark : markRepository.findAll()) {
                                if(mark.getCenterProfile().equals(_centerProfile.getId())) {
                                    temp = temp + mark.getMark();
                                    t = t + 1;
                                }
                            }
                            _centerProfile.setAverageRating(temp / t);
                            centerProfileRepository.save(_centerProfile);
                            return new ResponseEntity<>("Center marked successfully", HttpStatus.OK);
                        }
                    }
                }
            }
        }
        return new ResponseEntity<>("Failed.", HttpStatus.NOT_FOUND);
    }

}
