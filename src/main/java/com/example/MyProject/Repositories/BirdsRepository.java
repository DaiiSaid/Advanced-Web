package com.example.MyProject.Repositories;

import com.example.MyProject.Models.Birds;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BirdsRepository extends JpaRepository<Birds, Long> {
}
