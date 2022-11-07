package com.example.demo.repository;

import com.example.demo.model.UserObj;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserObjRepository extends JpaRepository<UserObj, Long> {
}
