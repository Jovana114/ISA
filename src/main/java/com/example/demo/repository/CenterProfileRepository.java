package com.example.demo.repository;

import com.example.demo.models.CenterProfile;
import com.example.demo.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CenterProfileRepository extends JpaRepository<CenterProfile, Long> {

    public CenterProfile findByName(String name);
    Boolean existsByName(String name);


}
