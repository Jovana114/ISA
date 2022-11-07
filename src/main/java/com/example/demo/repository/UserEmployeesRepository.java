package com.example.demo.repository;

import com.example.demo.model.UserEmployees;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserEmployeesRepository extends JpaRepository<UserEmployees, Long> {
}
