package com.example.MyProject.Controllers;

import com.example.MyProject.Models.WaterIntake;
import com.example.MyProject.Services.WaterIntakeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/water-intake")
//@CrossOrigin(origins = "http://localhost:4200")
public class WaterIntakeController {

    private final WaterIntakeService waterIntakeService;

    @Autowired
    public WaterIntakeController(WaterIntakeService waterIntakeService) {
        this.waterIntakeService = waterIntakeService;
    }

    @PostMapping
    public ResponseEntity<WaterIntake> createWaterIntake(@RequestBody WaterIntake waterIntake) {
        WaterIntake createdWaterIntake = waterIntakeService.saveWaterIntake(waterIntake);
        return new ResponseEntity<>(createdWaterIntake, HttpStatus.CREATED);
    }

    // Implement other REST endpoints (update, delete, etc.)
}
