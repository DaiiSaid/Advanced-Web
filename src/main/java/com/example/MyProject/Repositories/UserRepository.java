package com.example.MyProject.Repositories;

import com.example.MyProject.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

    User findByUsername(String username);
    // Define any custom query methods if needed
}
