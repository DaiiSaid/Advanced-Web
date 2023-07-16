package com.example.MyProject.Services;

import com.example.MyProject.Models.WaterIntake;
import com.example.MyProject.Repositories.WaterIntakeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WaterIntakeService {

    private final WaterIntakeRepository waterIntakeRepository;

    @Autowired
    public WaterIntakeService(WaterIntakeRepository waterIntakeRepository) {
        this.waterIntakeRepository = waterIntakeRepository;
    }

    public WaterIntake saveWaterIntake(WaterIntake waterIntake) {
        // Add any additional logic or validation here
        return waterIntakeRepository.save(waterIntake);
    }

    // Implement other methods as needed (update, delete, etc.)
}
