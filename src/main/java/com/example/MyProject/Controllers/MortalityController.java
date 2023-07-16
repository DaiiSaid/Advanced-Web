package com.example.MyProject.Controllers;

import com.example.MyProject.Models.Mortality;
import com.example.MyProject.Services.MortalityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mortalities")
public class MortalityController {
    private final MortalityService mortalityService;

    @Autowired
    public MortalityController(MortalityService mortalityService) {
        this.mortalityService = mortalityService;
    }

    @GetMapping
    public ResponseEntity<List<Mortality>> getAllMortalities() {
        List<Mortality> mortalities = mortalityService.getAllMortalities();
        return new ResponseEntity<>(mortalities, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Mortality> createMortality(@RequestBody Mortality mortality) {
        Mortality createdMortality = mortalityService.createMortality(mortality);
        return new ResponseEntity<>(createdMortality, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMortality(@PathVariable Long id) {
        mortalityService.deleteMortality(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

