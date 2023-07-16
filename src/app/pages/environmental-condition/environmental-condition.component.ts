import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EnvironmentalConditionService } from '../../services/environmental-condition.service';
import { Birds } from '../../models/Birds.model';

@Component({
  selector: 'app-environmental-condition',
  templateUrl: './environmental-condition.component.html',
  styleUrls: ['./environmental-condition.component.css']
})
export class EnvironmentalConditionComponent implements OnInit {
  environmentalConditionForm: FormGroup; // Declare the property without initialization

  birds: Birds[] = [];

  environmentalConditions: any[] = [];

  constructor(private formBuilder: FormBuilder, private environmentalConditionService: EnvironmentalConditionService) {
    this.environmentalConditionForm = this.formBuilder.group({
      birdId: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      temperature: ['', Validators.required],
      humidity: ['', Validators.required],
      lightIntensity: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.initializeForm();
    this.loadBirds();
    this.loadEnvironmentalConditions();
  }

  initializeForm() {
    this.environmentalConditionForm = new FormGroup({
      birdId: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      temperature: new FormControl('', Validators.required),
      humidity: new FormControl('', Validators.required),
      lightIntensity: new FormControl('', Validators.required)
    });
  }

  loadBirds() {
    this.environmentalConditionService.getBirds().subscribe(
      (birds: Birds[]) => {
        this.birds = birds;
      },
      (error) => {
        console.log('Error occurred while loading birds:', error);
      }
    );
  }

  loadEnvironmentalConditions() {
  this.environmentalConditionService.getEnvironmentalConditions().subscribe(
    (conditions: any[]) => {
      this.environmentalConditions = conditions; // Corrected assignment
    },
    (error) => {
      console.log('Error occurred while loading environmental conditions:', error);
    }
  );
}


  createEnvironmentalCondition() {
    if (this.environmentalConditionForm.invalid) {
      return;
    }

    const conditionData = this.environmentalConditionForm.value;
    this.environmentalConditionService.createEnvironmentalCondition(conditionData).subscribe(
      (response) => {
        console.log('Environmental condition created successfully:', response);
        this.environmentalConditionForm.reset();
        this.loadEnvironmentalConditions();
      },
      (error) => {
        console.log('Error occurred while creating environmental condition:', error);
      }
    );
  }

  deleteEnvironmentalCondition(conditionId: number) {
    this.environmentalConditionService.deleteEnvironmentalCondition(conditionId).subscribe(
      () => {
        console.log('Environmental condition deleted successfully');
        this.loadEnvironmentalConditions();
      },
      (error) => {
        console.log('Error occurred while deleting environmental condition:', error);
      }
    );
  }
}
