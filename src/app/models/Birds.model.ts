export class Birds {
  birdId: any;
  name: any;
  breed: any;
  gender: any;
  birthDate: any;
  age: any; // Updated property name to "age"
  weight: any;
  availability: any;
  color: any;

  // constructor() {
  //   this.birdId = 0;
  //   this.name = '';
  //   this.breed = '';
  //   this.gender = '';
  //   this.birthDate = new Date();
  //   this.age = this.calculateAge();
  //   this.weight = 0;
  //   this.availability = false;
  //   this.color = '';
  // }

  // private calculateAge(): string {
  //   const today = new Date();
  //   const birthDate = new Date(this.birthDate);
  
  //   const ageInMilliseconds = today.getTime() - birthDate.getTime();
  //   const ageInSeconds = ageInMilliseconds / 1000;
  //   const ageInMinutes = ageInSeconds / 60;
  //   const ageInHours = ageInMinutes / 60;
  //   const ageInDays = ageInHours / 24;
  
  //   const weeks = Math.floor(ageInDays / 7);
  //   const days = Math.floor(ageInDays % 7);
  
  //   let ageString = '';
  //   if (weeks > 0) {
  //     ageString += `${weeks} week${weeks > 1 ? 's' : ''} `;
  //   }
  //   if (days > 0) {
  //     ageString += `${days} day${days > 1 ? 's' : ''}`;
  //   }
  
  //   return ageString.trim();
  // }
}
  