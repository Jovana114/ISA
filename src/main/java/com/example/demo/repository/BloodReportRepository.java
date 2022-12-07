package com.example.demo.repository;

import com.example.demo.models.BloodReport;
import com.example.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BloodReportRepository extends JpaRepository<BloodReport, Long> {
}
