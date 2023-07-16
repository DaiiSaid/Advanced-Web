package com.example.MyProject.Repositories;

import com.example.MyProject.Models.Expenses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpensesRepository extends JpaRepository<Expenses, Long> {
    // Additional query methods can be defined here if needed
}
