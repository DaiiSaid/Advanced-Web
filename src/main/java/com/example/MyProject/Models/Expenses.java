package com.example.MyProject.Models;

import jakarta.persistence.*;
import lombok.Data;

import jakarta.persistence.*;
@Data
@Entity
@Table(name = "expenses")
public class Expenses {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int bagsOfFood;
    private double pricePerBag;
    private double waterExpenses;
    private double medicationExpenses;

    // Constructors, getters, and setters

    // ...
}
