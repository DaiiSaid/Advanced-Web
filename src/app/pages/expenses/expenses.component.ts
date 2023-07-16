import { Component } from '@angular/core';
import { ExpensesService } from '../../services/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {
  bagsOfFood: number=0;
  pricePerBag: number=0;
  waterExpenses: number=0;
  medicationExpenses: number=0;

  constructor(private expensesService: ExpensesService) {}

  saveExpenses() {
    // Create an object to hold the expense data
    const expenses = {
      bagsOfFood: this.bagsOfFood,
      pricePerBag: this.pricePerBag,
      waterExpenses: this.waterExpenses,
      medicationExpenses: this.medicationExpenses
    };

    // Call the expenses service to save the data to the database
    this.expensesService.saveExpenses(expenses).subscribe(
      () => {
        // Handle success
        console.log('Expenses saved successfully');
      },
      (error) => {
        // Handle error
        console.error('Error saving expenses:', error);
      }
    );
  }
}
