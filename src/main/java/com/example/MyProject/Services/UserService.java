package com.example.MyProject.Services;

//import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.MyProject.Models.User;
import com.example.MyProject.Repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
//        this.passwordEncoder = passwordEncoder;
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User login(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null; // Return null if the login credentials are invalid
    }

//        // Check if the username or email already exists
//        if (userRepository.existsByUsername(user.getUsername())) {
//            throw new RuntimeException("Username already exists");
//        }
//
//        if (userRepository.existsByEmail(user.getEmail())) {
//            throw new RuntimeException("Email already exists");
//        }
//
//        // Add additional validation and logic as per your requirements
//
//        // Save the user to the database
////        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        return userRepository.save(user);
//    }

    //post
    public User post(User user){
        return userRepository.save(user);
    }

    public void signup(User user) {
    }
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
    public Optional <User> getById(long id){
        return userRepository.findById(id);
    }
    public List <User> getall(){
        List <User> userList = userRepository.findAll();
        return userList;
    }
}
