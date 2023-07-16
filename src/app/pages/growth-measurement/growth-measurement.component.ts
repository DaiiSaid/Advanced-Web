import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GrowthMeasurement } from '../../models/GrowthMeasurement.model';
import { GrowthMeasurementService } from '../../services/growth-measurement.service';

@Component({
  selector: 'app-growth-measurement',
  templateUrl: './growth-measurement.component.html',
  styleUrls: ['./growth-measurement.component.css']
})
export class GrowthMeasurementComponent implements OnInit {
  growthMeasurementForm!: FormGroup;
  measurements: GrowthMeasurement[] = [];
  birds: any[] = []; // Make sure to define the 'birds' array or replace it with the appropriate data source

  displayedColumns: string[] = ['bird', 'weight', 'bodyLength', 'wingSpan', 'legLength', 'actions'];
  constructor(
    private formBuilder: FormBuilder,
    private growthMeasurementService: GrowthMeasurementService
  ) { }

  ngOnInit() {
    this.createGrowthMeasurementForm();
    this.fetchGrowthMeasurements();
  }

  createGrowthMeasurementForm(): void {
    this.growthMeasurementForm = this.formBuilder.group({
      weight: ['', Validators.required],
      bodyLength: ['', Validators.required],
      wingSpan: ['', Validators.required],
      legLength: ['', Validators.required]
    });
  }

  fetchGrowthMeasurements(): void {
    this.growthMeasurementService.getGrowthMeasurements().subscribe(
      growthMeasurements => {
        this.measurements = growthMeasurements;
      },
      error => {
        console.log('Error occurred while loading growth measurements:', error);
      }
    );
  }

  createGrowthMeasurement(): void {
    if (this.growthMeasurementForm.valid) {
      const newGrowthMeasurement: GrowthMeasurement = this.growthMeasurementForm.value;
      this.growthMeasurementService.createGrowthMeasurement(newGrowthMeasurement).subscribe(
        createGrowthMeasurement => {
          this.measurements.push(createGrowthMeasurement);
          console.log('Growth measurement created successfully');
          this.growthMeasurementForm.reset();
        },
        error => {
          console.log('Error occurred while creating growth measurement:', error);
        }
      );
    }
  }

  deleteGrowthMeasurement(id: number) {
    this.growthMeasurementService.deleteGrowthMeasurement(id).subscribe(
      () => {
        this.measurements = this.measurements.filter(m => m.id !== id);
      },
      error => {
        console.log('Error occurred while deleting growth measurement:', error);
      }
    );
  }
}
