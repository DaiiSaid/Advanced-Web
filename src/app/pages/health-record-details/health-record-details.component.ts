import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HealthRecord } from '../../models/HealthRecord.model';
import { HealthRecordService } from '../../services/health-record.service';

@Component({
  selector: 'app-health-record-details',
  templateUrl: './health-record-details.component.html',
  styleUrls: ['./health-record-details.component.css']
})
export class HealthRecordDetailsComponent implements OnInit {
  healthRecord: HealthRecord | null = null;

  constructor(
    private route: ActivatedRoute,
    private healthRecordService: HealthRecordService
  ) { }

  ngOnInit(): void {
    this.loadHealthRecord();
  }

  loadHealthRecord(): void {
    const recordId = this.route.snapshot.params['id'];
    this.healthRecordService.getHealthRecordById(recordId)
      .subscribe(record => this.healthRecord = record);
  }
}
