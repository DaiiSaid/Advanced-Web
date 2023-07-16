package com.example.MyProject.Models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "feed_consumption")
public class FeedConsumption {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "birdId", nullable = false)
    private Birds birds;

    @Column(nullable = false)
    private double amount;
    private String feedType;
    private LocalDate consumptionDate;

}
