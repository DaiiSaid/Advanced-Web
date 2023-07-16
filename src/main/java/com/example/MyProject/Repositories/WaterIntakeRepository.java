package com.example.MyProject.Repositories;

import com.example.MyProject.Models.WaterIntake;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WaterIntakeRepository extends JpaRepository<WaterIntake, Long> {
    // Add custom query methods if needed
}
