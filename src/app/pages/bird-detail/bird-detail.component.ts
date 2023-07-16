import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BirdService } from '../../services/birds.service';
import { Birds } from '../../models/Birds.model';

@Component({
  selector: 'app-bird-detail',
  templateUrl: './bird-detail.component.html',
  styleUrls: ['./bird-detail.component.css']
})
export class BirdDetailComponent implements OnInit {
  id!:number
  bird: Birds | undefined = undefined;

  constructor(private route: ActivatedRoute, private birdService: BirdService) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   const BirdId = Number(params.get('id'));
    //   if (BirdId) {
    //     this.getBirdDetails(BirdId);
    //   } else {
    //     console.error('Invalid bird ID');
    //   }
    // });
    const birdId = this.route.snapshot.params['birdId'];

    this.birdService.getBirdById(birdId).subscribe
  }

  getBirdDetails(birdId: number): void {
    this.birdService.getBirdById(birdId)
      .subscribe(
        bird => {
          if (bird) {
            this.bird = bird;
          } else {
            console.error('Bird not found');
          }
        },
        error => {
          console.error('Error retrieving bird details:', error);
        }
      );
  }

  

  deleteBird(birdId: number | undefined): void {
    if (birdId && confirm('Are you sure you want to delete this bird?')) {
      this.birdService.deleteBird(birdId)
        .subscribe(
          () => {
            this.fetchBirds(); // Refresh the list after deletion
            console.log('Bird deleted successfully');
          },
          error => {
            console.error('Error deleting bird:', error);
          }
        );
    }
  }
  
  fetchBirds() {
    throw new Error('Method not implemented.');
  }

  updateBird(bird: Birds | undefined): void {
    if (bird) {
      // Implement your update logic here
      // You can navigate to a separate update page/component or display a modal form for updating the bird's information
    }
  }
}
