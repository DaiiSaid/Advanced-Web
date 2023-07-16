package com.example.MyProject.Models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Entity
@Table(name = "environmental_condition")

public class EnvironmentalCondition {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "birdId", nullable = false)
    private Birds birds;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private LocalTime time;

    // Other attributes
    private double temperature;
    private double humidity;
    private double lightIntensity;
}
