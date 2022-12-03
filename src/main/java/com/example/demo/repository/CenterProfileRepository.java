package com.example.demo.repository;

import com.example.demo.models.CenterProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CenterProfileRepository extends JpaRepository<CenterProfile, Long> {

    public CenterProfile findByName(String name);
    Boolean existsByName(String name);


    public List<CenterProfile> findByNameContainingOrAddressContaining(String name, String address);

    public List<CenterProfile> findByAverageRatingAndNameContainingOrAddressContaining(Double averageRating,String name, String address);
    public List<CenterProfile> findByAverageRating(Double averageRating);

}
