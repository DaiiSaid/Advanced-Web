package com.example.MyProject.Models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.Period;

@Data
@Entity
@Table(name = "birds")
public class Birds {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "birdId")
    private Long birdId;

    @Column(nullable = false)
    private String name;

    private String breed;

    private String gender;

    private LocalDate birthDate;

    private String color; // Include the color property

    private double weight; // Include the weight property

    private boolean availability; // Include the availability property

    @Transient
    public int getAgeInDays() {
        LocalDate currentDate = LocalDate.now();
        Period period = Period.between(birthDate, currentDate);
        return period.getDays();
    }
}
