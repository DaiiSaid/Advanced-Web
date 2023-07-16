package com.example.MyProject.Services;

import com.example.MyProject.Models.Birds;
import com.example.MyProject.Repositories.BirdsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BirdsService {
    private final BirdsRepository birdsRepository;

    @Autowired
    public BirdsService(BirdsRepository birdsRepository) {
        this.birdsRepository = birdsRepository;
    }

    public List<Birds> getAllBirds() {
        return birdsRepository.findAll();
    }

    public Birds getBirdById(Long id) {
        return birdsRepository.findById(id).orElse(null);
    }
    public Birds createBird(Birds bird) {
        return birdsRepository.save(bird);
    }

    public Birds updateBird(Long id, Birds updatedBird) {
        Birds bird = birdsRepository.findById(id).orElse(null);
        if (bird != null) {
            bird.setName(updatedBird.getName());
            return birdsRepository.save(bird);
        }
        return null;
    }

    public void deleteBird(Long id) {
        birdsRepository.deleteById(id);
    }
}
