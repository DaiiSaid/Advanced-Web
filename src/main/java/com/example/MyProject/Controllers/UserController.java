package com.example.MyProject.Controllers;

import com.example.MyProject.Models.User;
import com.example.MyProject.Models.UserCredentials;
import com.example.MyProject.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private  UserService userService;

//    @Autowired
//    public UserController(UserService userService) {
//        this.userService = userService;
//    }

//    @PostMapping("/signup")
//    public ResponseEntity<?> signup(@RequestBody User user) {
//        try {
//            // Invoke the UserService to handle the signup logic
//            userService.signup(user);
//            return ResponseEntity.ok("Signup successful");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Signup failed");
//        }
//    }

    // Other UserController methods for user-related operations

    @PostMapping("/signup")
    public ResponseEntity<?> post (@RequestBody User user){
        return ResponseEntity.ok(userService.post(user));
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserCredentials credentials) {
        User user = userService.login(credentials.getUsername(), credentials.getPassword());
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }
    @GetMapping("/login/{id}")
    public ResponseEntity<?> getById(@PathVariable long id){
        return ResponseEntity.ok(userService.getById(id));
    }
    @GetMapping("/signup")
    public List <User> getAll(){
        return userService.getall();
    }

}
