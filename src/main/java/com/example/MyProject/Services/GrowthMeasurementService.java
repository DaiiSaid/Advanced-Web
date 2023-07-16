package com.example.MyProject.Services;

import com.example.MyProject.Models.GrowthMeasurement;
import com.example.MyProject.Repositories.GrowthMeasurementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GrowthMeasurementService {
    private final GrowthMeasurementRepository growthMeasurementRepository;

    @Autowired
    public GrowthMeasurementService(GrowthMeasurementRepository growthMeasurementRepository) {
        this.growthMeasurementRepository = growthMeasurementRepository;
    }

    public List<GrowthMeasurement> getAllGrowthMeasurements() {
        return growthMeasurementRepository.findAll();
    }

    public GrowthMeasurement getGrowthMeasurementById(Long id) {
        return growthMeasurementRepository.findById(id).orElse(null);
    }

    public GrowthMeasurement createGrowthMeasurement(GrowthMeasurement growthMeasurement) {
        return growthMeasurementRepository.save(growthMeasurement);
    }

    public GrowthMeasurement updateGrowthMeasurement(Long id, GrowthMeasurement growthMeasurement) {
        GrowthMeasurement existingGrowthMeasurement = growthMeasurementRepository.findById(id).orElse(null);
        if (existingGrowthMeasurement != null) {
            existingGrowthMeasurement.setBirds(growthMeasurement.getBirds());
            existingGrowthMeasurement.setWeight(growthMeasurement.getWeight());
            existingGrowthMeasurement.setBodyLength(growthMeasurement.getBodyLength());
            existingGrowthMeasurement.setWingSpan(growthMeasurement.getWingSpan());
            existingGrowthMeasurement.setLegLength(growthMeasurement.getLegLength());

            return growthMeasurementRepository.save(existingGrowthMeasurement);
        }
        return null;
    }

    public void deleteGrowthMeasurement(Long id) {
        growthMeasurementRepository.deleteById(id);
    }
}
