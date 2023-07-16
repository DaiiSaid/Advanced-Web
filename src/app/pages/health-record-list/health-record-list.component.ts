import { Component, OnInit } from '@angular/core';
import { HealthRecord } from '../../models/HealthRecord.model';
import { HealthRecordService } from '../../services/health-record.service';

@Component({
  selector: 'app-health-record-list',
  templateUrl: './health-record-list.component.html',
  styleUrls: ['./health-record-list.component.css']
})
export class HealthRecordListComponent implements OnInit {
  healthRecords: HealthRecord[] = [];
  displayedColumns: string[] = ['date', 'bird', 'vaccinated', 'medication', 'symptoms', 'actions'];

  constructor(private healthRecordService: HealthRecordService) { }

  ngOnInit(): void {
    this.loadHealthRecords();
  }

  loadHealthRecords(): void {
    this.healthRecordService.getHealthRecords()
      .subscribe(records => this.healthRecords = records);
  }

  viewDetails(recordId: number): void {
    // Navigate to the HealthRecordDetailsComponent passing the recordId
    // You can use Angular Router or any other navigation mechanism
  }
}
