import { Birds } from "./Birds.model";

export class HealthRecord {
  id: number;
  birdId: number;
  birds!: Birds;
  date: Date;
  vaccinated: boolean;
  medication: string;
  symptoms: string;
  
  constructor() {
    this.id = 0;
    this.birdId = 0;
    this.date = new Date();
    this.vaccinated = false;
    this.medication = '';
    this.symptoms = '';
  }
}
