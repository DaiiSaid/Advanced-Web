package com.example.MyProject.Services;
import com.example.MyProject.Models.FeedConsumption;
import com.example.MyProject.Repositories.FeedConsumptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedConsumptionService {

    private final FeedConsumptionRepository feedConsumptionRepository;

    @Autowired
    public FeedConsumptionService(FeedConsumptionRepository feedConsumptionRepository) {
        this.feedConsumptionRepository = feedConsumptionRepository;
    }

    public FeedConsumption saveFeedConsumption(FeedConsumption feedConsumption) {
        // Add any additional logic or validation here
        return feedConsumptionRepository.save(feedConsumption);
    }

    // Implement other methods as needed (update, delete, etc.)
}
