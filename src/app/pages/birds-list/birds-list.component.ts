import { Component, OnInit } from '@angular/core';
import { BirdService } from '../../services/birds.service';
import { Birds } from '../../models/Birds.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birds-list',
  templateUrl: './birds-list.component.html',
  styleUrls: ['./birds-list.component.css']
})
export class BirdsListComponent implements OnInit {
  birds: Birds[] = [];

  constructor(private birdService: BirdService,
    private router:Router) { }

  ngOnInit(): void {
    this.fetchBirds();
  }

  fetchBirds(): void {
    this.birdService.getBirds()
      .subscribe(
        birds => {
          this.birds = birds;
        },
        error => {
          console.error('Error fetching birds:', error);
        }
      );
  }
  view(id : number){
    this.router.navigate(['/navbar/detail',{id}])
  }

 
  
}
