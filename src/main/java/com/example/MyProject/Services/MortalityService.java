package com.example.MyProject.Services;

import com.example.MyProject.Models.Mortality;
import com.example.MyProject.Repositories.MortalityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MortalityService {
    private final MortalityRepository mortalityRepository;

    @Autowired
    public MortalityService(MortalityRepository mortalityRepository) {
        this.mortalityRepository = mortalityRepository;
    }

    public List<Mortality> getAllMortalities() {
        return mortalityRepository.findAll();
    }

    public Mortality createMortality(Mortality mortality) {
        return mortalityRepository.save(mortality);
    }

    public void deleteMortality(Long id) {
        mortalityRepository.deleteById(id);
    }
}
