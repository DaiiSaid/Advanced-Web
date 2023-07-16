package com.example.MyProject.Controllers;

import com.example.MyProject.Models.HealthRecord;
import com.example.MyProject.Repositories.HealthRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/health-records")
public class HealthRecordController {

    private final HealthRecordRepository healthRecordRepository;

    @Autowired
    public HealthRecordController(HealthRecordRepository healthRecordRepository) {
        this.healthRecordRepository = healthRecordRepository;
    }

    @GetMapping
    public List<HealthRecord> getAllHealthRecords() {
        return healthRecordRepository.findAll();
    }

    @PostMapping
    public HealthRecord createHealthRecord(@RequestBody HealthRecord healthRecord) {
        return healthRecordRepository.save(healthRecord);
    }

    @DeleteMapping("/{id}")
    public void deleteHealthRecord(@PathVariable Long id) {
        healthRecordRepository.deleteById(id);
    }
}
