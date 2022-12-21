package com.example.demo.service;

import com.example.demo.models.CenterProfile;
import com.example.demo.models.Mark;
import com.example.demo.models.User;
import com.example.demo.repository.CenterProfileRepository;
import com.example.demo.repository.MarkRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarkService {

    @Autowired
    MarkRepository markRepository;

    public Mark findByCenterAndUser(CenterProfile centerProfile, User user) {

        List<Mark> allMarks = markRepository.findAll();

        for (Mark mark: allMarks) {
            if(mark.getUser() == user.getId() && mark.getCenterProfile() == centerProfile.getId()){
                return mark;
            }
        }

        return null;
    }

}
