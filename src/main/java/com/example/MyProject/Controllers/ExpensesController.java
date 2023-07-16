package com.example.MyProject.Controllers;

import com.example.MyProject.Models.Expenses;
import com.example.MyProject.Services.ExpensesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpensesController {

    @Autowired
    private ExpensesService expenseService;

    @PostMapping
    public ResponseEntity<Expenses> createExpense(@RequestBody Expenses expense) {
        Expenses createdExpense = expenseService.createExpense(expense);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdExpense);
    }

    @GetMapping
    public ResponseEntity<List<Expenses>> getAllExpenses() {
        List<Expenses> expenses = expenseService.getAllExpenses();
        return ResponseEntity.ok(expenses);
    }

    // Other ExpenseController methods

    // ...
}
