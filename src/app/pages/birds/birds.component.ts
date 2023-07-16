import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { BirdService } from '../../services/birds.service';
import { Birds } from '../../models/Birds.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})

export class BirdsComponent {
  bird: Birds = new Birds();

  constructor(private birdService: BirdService,
    private router:Router) { }

  saveBird(): void {
    this.birdService.saveBird(this.bird)
      .subscribe(response => {
        console.log('Bird saved:', response);
        
        // Perform any additional actions after saving the bird
      });
  }
  onSubmit(): void {
    this.saveBird();
  }
  
}
 
     
 