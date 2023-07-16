import { Component, OnInit } from '@angular/core';
import { WaterIntake } from '../../models/WaterIntake.model';
import { Birds } from '../../models/Birds.model';
import { WaterIntakeService } from '../../services/water-intake.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-water-intake',
  templateUrl: './water-intake.component.html',
  styleUrls: ['./water-intake.component.css']
})
export class WaterIntakeComponent implements OnInit {
  waterIntakes: WaterIntake[] = [];
  birds: Birds[] = [];
  newWaterIntake: WaterIntake = new WaterIntake(); 
  constructor(private waterIntakeService: WaterIntakeService) {}

  displayedColumns: string[] = ['intakeDate', 'birdId', 'amount', 'source', 'actions'];

  ngOnInit(): void {
    this.fetchWaterIntakes();
    this.fetchBirds();
  }

  fetchWaterIntakes(): void {
    this.waterIntakeService.getWaterIntakes().subscribe(
      (waterIntakes: WaterIntake[]) => {
        this.waterIntakes = waterIntakes;
      },
      (error: any) => {
        console.error('Error fetching water intakes:', error);
      }
    );
  }
  fetchBirds(): void {
    this.waterIntakeService.getBirds().subscribe(
      (birds: Birds[]) => {
        this.birds = birds;
      },
      (error: any) => {
        console.error('Error fetching birds:', error);
      }
    );
  }
  
  

  deleteWaterIntake(id: number): void {
    this.waterIntakeService.deleteWaterIntake(id).subscribe(
      () => {
        // Remove the deleted water intake from the array
        this.waterIntakes = this.waterIntakes.filter(waterIntake => waterIntake.id !== id);
      },
      (error: any) => {
        console.error('Error deleting water intake:', error);
      }
    );
  }

  addWaterIntake(): void {
    this.waterIntakeService.addWaterIntake(this.newWaterIntake)
      .subscribe(
        (waterIntake: WaterIntake) => {
          // Add the newly created water intake to the array
          this.waterIntakes.push(waterIntake);
          // Clear the form fields
          this.newWaterIntake = new WaterIntake();
        },
        (error: any) => {
          console.error('Error adding water intake:', error);
        }
      );
  }
  
}
