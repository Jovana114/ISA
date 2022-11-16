package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import com.example.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);
  User findByEmail(String email);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);

  //List<User> findAll();

}
