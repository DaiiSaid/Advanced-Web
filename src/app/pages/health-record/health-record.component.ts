import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HealthRecordService } from '../../services/health-record.service';
import { HealthRecord } from '../../models/HealthRecord.model';
import { Birds } from '../../models/Birds.model';

@Component({
  selector: 'app-health-record',
  templateUrl: './health-record.component.html',
  styleUrls: ['./health-record.component.css']
})
export class HealthRecordComponent implements OnInit {
  newHealthRecord: HealthRecord = new HealthRecord();
  healthRecords: HealthRecord[] = [];
  birds: Birds[] = [];
  healthRecordForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private healthRecordService: HealthRecordService
  ) {}

  displayedColumns: string[] = ['date', 'bird', 'vaccinated', 'medication', 'symptoms', 'actions'];

  ngOnInit() {
    this.loadHealthRecords();
    this.loadBirds();
    this.initializeForm();
  }

  initializeForm() {
    this.healthRecordForm = this.formBuilder.group({
      birdId: ['', Validators.required],
      // Define other form controls and their validators here
    });
  }

  loadHealthRecords() {
    // Call the service to retrieve health records data
    this.healthRecordService.getHealthRecords().subscribe(
      (healthRecords: HealthRecord[]) => {
        this.healthRecords = healthRecords;
      },
      (error) => {
        console.log('Error occurred while loading health records:', error);
      }
    );
  }

  loadBirds() {
    // Call the service to retrieve birds data
    this.healthRecordService.getBirds().subscribe(
      (birds: Birds[]) => {
        this.birds = birds;
      },
      (error) => {
        console.log('Error occurred while loading birds:', error);
      }
    );
  }

  createHealthRecord() {
    // Call the service to create a new health record
    this.healthRecordService.createHealthRecord(this.newHealthRecord).subscribe(
      (response) => {
        console.log('Health record created successfully:', response);
        // Reset the form after successful creation
        this.healthRecordForm.reset();
        this.loadHealthRecords(); // Reload the health records after creation
      },
      (error) => {
        console.log('Error occurred while creating health record:', error);
      }
    );
  }

  deleteHealthRecord(healthRecordId: number) {
    // Call the service to delete a health record
    this.healthRecordService.deleteHealthRecord(healthRecordId).subscribe(
      () => {
        console.log('Health record deleted successfully');
        // Reload the health records after deletion
        this.loadHealthRecords();
      },
      (error) => {
        console.log('Error occurred while deleting health record:', error);
      }
    );
  }
}
