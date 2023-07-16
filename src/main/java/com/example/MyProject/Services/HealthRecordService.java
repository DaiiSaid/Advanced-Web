package com.example.MyProject.Services;

import com.example.MyProject.Models.HealthRecord;
import com.example.MyProject.Repositories.HealthRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HealthRecordService {

    private final HealthRecordRepository healthRecordRepository;

    @Autowired
    public HealthRecordService(HealthRecordRepository healthRecordRepository) {
        this.healthRecordRepository = healthRecordRepository;
    }

    public List<HealthRecord> getAllHealthRecords() {
        return healthRecordRepository.findAll();
    }

    public HealthRecord createHealthRecord(HealthRecord healthRecord) {
        return healthRecordRepository.save(healthRecord);
    }

    public void deleteHealthRecord(Long id) {
        healthRecordRepository.deleteById(id);
    }
}
