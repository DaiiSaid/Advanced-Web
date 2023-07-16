package com.example.MyProject.Models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name="water_intake")

public class WaterIntake {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "birdId", nullable = false)
    private Birds birds;

    @Column(nullable = false)
    private double amount;

    // Other attributes
    private LocalDate intakeDate;
    private String source;
}
