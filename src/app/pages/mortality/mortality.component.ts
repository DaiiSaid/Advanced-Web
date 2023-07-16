import { Component, OnInit } from '@angular/core';
import { Mortality } from '../../models/mortality.model';
import { MortalityService } from '../../services/mortality.service';

@Component({
  selector: 'app-mortality',
  templateUrl: './mortality.component.html',
  styleUrls: ['./mortality.component.css']
})
export class MortalityComponent implements OnInit {
  mortalities: Mortality[] = [];
  newMortality: Mortality = new Mortality(); // Create an empty instance

  constructor(private mortalityService: MortalityService) { }

  ngOnInit() {
    this.loadMortalities();
  }

  loadMortalities() {
    this.mortalityService.getMortalities().subscribe(
      mortalities => {
        this.mortalities = mortalities;
      },
      error => {
        console.log('Error occurred while loading mortalities:', error);
      }
    );
  }

  createMortality() {
    this.mortalityService.createMortality(this.newMortality).subscribe(
      createdMortality => {
        this.mortalities.push(createdMortality);
        this.newMortality = new Mortality(); // Reset to an empty instance
      },
      error => {
        console.log('Error occurred while creating mortality:', error);
      }
    );
  }

  deleteMortality(id: number) {
    this.mortalityService.deleteMortality(id).subscribe(
      () => {
        this.mortalities = this.mortalities.filter(m => m.id !== id);
      },
      error => {
        console.log('Error occurred while deleting mortality:', error);
      }
    );
  }
}
