// import { Birds } from "./Birds.model";
export class GrowthMeasurement {
  id: number;
  birdId: number;
  weight: number;
  bodyLength: number;
  wingSpan: number;
  legLength: number;

  constructor(
    id: number,
    birdId: number,
    weight: number,
    bodyLength: number,
    wingSpan: number,
    legLength: number
  ) {
    this.id = id;
    this.birdId = birdId;
    this.weight = weight;
    this.bodyLength = bodyLength;
    this.wingSpan = wingSpan;
    this.legLength = legLength;
  }
}
