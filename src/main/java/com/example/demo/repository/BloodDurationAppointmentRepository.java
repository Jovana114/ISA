package com.example.demo.repository;

import com.example.demo.models.BloodDonationAppointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository

public interface BloodDurationAppointmentRepository extends JpaRepository<BloodDonationAppointment, Long> {
    public List<BloodDonationAppointment> findByDate(String date);

    public List<BloodDonationAppointment> findByReservedFalseAndDateContainingOrTimeContaining(String date, String time);


}
