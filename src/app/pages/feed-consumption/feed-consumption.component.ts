import { Component, OnInit } from '@angular/core';
import { FeedConsumption } from "../../models/FeedConsumption.model";
import { FeedConsumptionService } from '../../services/feed-consumption.service';

@Component({
  selector: 'app-feed-consumption',
  templateUrl: './feed-consumption.component.html',
  styleUrls: ['./feed-consumption.component.css']
})
export class FeedConsumptionComponent implements OnInit {
  feedConsumptions: FeedConsumption[] = [];

  constructor(private feedConsumptionService: FeedConsumptionService) { }

  ngOnInit(): void {
    this.fetchFeedConsumptions();
  }

  fetchFeedConsumptions(): void {
    this.feedConsumptionService.getFeedConsumptions()
      .subscribe(
        feedConsumptions => {
          this.feedConsumptions = feedConsumptions;
        },
        error => {
          console.error('Error fetching feed consumptions:', error);
        }
      );
  }

  createFeedConsumption(feedConsumption: FeedConsumption): void {
    this.feedConsumptionService.createFeedConsumption(feedConsumption)
      .subscribe(
        createdFeedConsumption => {
          this.feedConsumptions.push(createdFeedConsumption);
          console.log('Feed consumption created successfully');
        },
        error => {
          console.error('Error creating feed consumption:', error);
        }
      );
  }

  updateFeedConsumption(feedConsumption: FeedConsumption): void {
    this.feedConsumptionService.updateFeedConsumption(feedConsumption)
      .subscribe(
        updatedFeedConsumption => {
          const index = this.feedConsumptions.findIndex(fc => fc.id === updatedFeedConsumption.id);
          if (index !== -1) {
            this.feedConsumptions[index] = updatedFeedConsumption;
          }
          console.log('Feed consumption updated successfully');
        },
        error => {
          console.error('Error updating feed consumption:', error);
        }
      );
  }

  deleteFeedConsumption(id: number): void {
    if (confirm('Are you sure you want to delete this feed consumption?')) {
      this.feedConsumptionService.deleteFeedConsumption(id)
        .subscribe(
          () => {
            this.feedConsumptions = this.feedConsumptions.filter(fc => fc.id !== id);
            console.log('Feed consumption deleted successfully');
          },
          error => {
            console.error('Error deleting feed consumption:', error);
          }
        );
    }
  }
}
