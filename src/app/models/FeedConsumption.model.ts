import { Birds } from "./Birds.model";

export class FeedConsumption {
    id: number = 0;
    birds: Birds = new Birds;
    amount: number = 0; // Add default value
    feedType: string = ''; // Add default value
    consumptionDate: string = ''; // Add default value
  
    constructor(data?: Partial<FeedConsumption>) {
      if (data) {
        Object.assign(this, data);
      }
    }
  }
  