package com.example.demo.repository;

import com.example.demo.models.Mark;
import com.example.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MarkRepository extends JpaRepository<Mark, Long> {

    List<Mark> findAll();

}
