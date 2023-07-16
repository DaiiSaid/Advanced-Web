package com.example.MyProject.Repositories;

import com.example.MyProject.Models.FeedConsumption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedConsumptionRepository extends JpaRepository<FeedConsumption, Long> {
    // Add any custom queries or methods here
}

