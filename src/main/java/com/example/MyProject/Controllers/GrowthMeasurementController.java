package com.example.MyProject.Controllers;

import com.example.MyProject.Models.GrowthMeasurement;
import com.example.MyProject.Services.GrowthMeasurementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/growth-measurements")
public class GrowthMeasurementController {
    private final GrowthMeasurementService growthMeasurementService;

    @Autowired
    public GrowthMeasurementController(GrowthMeasurementService growthMeasurementService) {
        this.growthMeasurementService = growthMeasurementService;
    }

    @GetMapping
    public List<GrowthMeasurement> getAllGrowthMeasurements() {
        return growthMeasurementService.getAllGrowthMeasurements();
    }

    @GetMapping("/{id}")
    public GrowthMeasurement getGrowthMeasurementById(@PathVariable Long id) {
        return growthMeasurementService.getGrowthMeasurementById(id);
    }

    @PostMapping
    public GrowthMeasurement createGrowthMeasurement(@RequestBody GrowthMeasurement growthMeasurement) {
        return growthMeasurementService.createGrowthMeasurement(growthMeasurement);
    }

    @PutMapping("/{id}")
    public GrowthMeasurement updateGrowthMeasurement(@PathVariable Long id, @RequestBody GrowthMeasurement growthMeasurement) {
        return growthMeasurementService.updateGrowthMeasurement(id, growthMeasurement);
    }

    @DeleteMapping("/{id}")
    public void deleteGrowthMeasurement(@PathVariable Long id) {
        growthMeasurementService.deleteGrowthMeasurement(id);
    }
}
