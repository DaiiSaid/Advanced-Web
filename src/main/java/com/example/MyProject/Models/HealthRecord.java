package com.example.MyProject.Models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "health_records")
public class HealthRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "birdId", nullable = false)
    private Birds birds;

    @Column(nullable = false)
    private LocalDate date;
    private boolean vaccinated;
    private String medication;
    private String symptoms;
}
