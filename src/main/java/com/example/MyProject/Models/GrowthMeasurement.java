package com.example.MyProject.Models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "growth_measurement")

public class GrowthMeasurement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "birdId", nullable = false)
    private Birds birds;

    @Column(nullable = false)
    private double weight;
    private double bodyLength;
    private double wingSpan;
    private double legLength;
}
