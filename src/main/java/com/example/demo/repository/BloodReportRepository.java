package com.example.demo.repository;

import com.example.demo.models.BloodReport;
import com.example.demo.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BloodReportRepository extends JpaRepository<BloodReport, Long> {
    Optional<BloodReport> findOneByUsers_id(Long id);
    List<BloodReport> findAll();
}
