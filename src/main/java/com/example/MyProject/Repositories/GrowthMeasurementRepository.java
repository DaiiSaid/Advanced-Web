package com.example.MyProject.Repositories;

import com.example.MyProject.Models.GrowthMeasurement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GrowthMeasurementRepository extends JpaRepository<GrowthMeasurement, Long> {
}
