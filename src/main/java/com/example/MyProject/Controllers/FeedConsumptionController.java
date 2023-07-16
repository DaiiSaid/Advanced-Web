package com.example.MyProject.Controllers;

import com.example.MyProject.Models.FeedConsumption;
import com.example.MyProject.Services.FeedConsumptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/feed-consumption")
//@CrossOrigin(origins = "http://localhost:4200")
public class FeedConsumptionController {

    private final FeedConsumptionService feedConsumptionService;

    @Autowired
    public FeedConsumptionController(FeedConsumptionService feedConsumptionService) {
        this.feedConsumptionService = feedConsumptionService;
    }

    @PostMapping
    public ResponseEntity<FeedConsumption> createFeedConsumption(@RequestBody FeedConsumption feedConsumption) {
        FeedConsumption createdFeedConsumption = feedConsumptionService.saveFeedConsumption(feedConsumption);
        return new ResponseEntity<>(createdFeedConsumption, HttpStatus.CREATED);
    }

    // Implement other REST endpoints (update, delete, etc.)
}

