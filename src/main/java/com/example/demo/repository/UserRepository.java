package com.example.demo.repository;

<<<<<<< HEAD
import com.example.demo.model.User;
import com.example.demo.payload.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;

=======
>>>>>>> dev
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
<<<<<<< HEAD
	User findByEmail(String email);
	User findByUsernameOrEmail(String username, String email);
	Optional<User> findByUsername(String username);
	Boolean existsByUsername(String username);
	Boolean existsByEmail(String email);
}
=======
  Optional<User> findByUsername(String username);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);
}
>>>>>>> dev
