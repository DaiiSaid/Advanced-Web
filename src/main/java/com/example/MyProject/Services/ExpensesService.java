package com.example.MyProject.Services;

import com.example.MyProject.Models.Expenses;
import com.example.MyProject.Repositories.ExpensesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpensesService {

    private final ExpensesRepository expenseRepository;

    @Autowired
    public ExpensesService(ExpensesRepository expensesRepository) {
        this.expenseRepository = expensesRepository;
    }

    public Expenses createExpense(Expenses expenses) {
        return expenseRepository.save(expenses);
    }

    public List<Expenses> getAllExpenses() {
        return expenseRepository.findAll();
    }

    // Other ExpenseService methods

    // ...
}
