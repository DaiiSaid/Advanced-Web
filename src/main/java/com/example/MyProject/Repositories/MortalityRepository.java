package com.example.MyProject.Repositories;
import com.example.MyProject.Models.Mortality;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MortalityRepository extends JpaRepository<Mortality, Long> {
}


