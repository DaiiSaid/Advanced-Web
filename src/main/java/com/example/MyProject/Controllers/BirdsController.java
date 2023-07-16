package com.example.MyProject.Controllers;
import com.example.MyProject.Models.Birds;
import com.example.MyProject.Repositories.BirdsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/birds")
//@CrossOrigin(origins = "http://localhost:4200")
public class BirdsController {

    private final BirdsRepository birdsRepository;

    @Autowired
    public BirdsController(BirdsRepository birdsRepository) {
        this.birdsRepository = birdsRepository;
    }
    @PostMapping
    public Birds createBird(@RequestBody Birds bird) {
        return birdsRepository.save(bird);
    }

    @GetMapping("/{birdId}")
    public Birds getBird(@PathVariable Long birdId) {
        return birdsRepository.findById(birdId).orElse(null);
    }

    @GetMapping
    public List<Birds> getAllBirds() {
        return birdsRepository.findAll();
    }

    @PutMapping("/{birdId}")
    public Birds updateBirdWeight(@PathVariable Long birdId, @RequestParam double weight) {
        Birds bird = birdsRepository.findById(birdId).orElse(null);
        if (bird != null) {
            bird.setWeight(weight);
            return birdsRepository.save(bird);
        }
        return null;
    }


    @DeleteMapping("/{birdId}")
    public void deleteBird(@PathVariable Long birdId) {
        birdsRepository.deleteById(birdId);
    }
}

