package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import com.example.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.ERole;
import com.example.demo.models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
  List<Role> findAll();
}
