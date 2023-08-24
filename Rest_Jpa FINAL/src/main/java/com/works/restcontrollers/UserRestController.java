package com.works.restcontrollers;

import com.works.entities.User;
import com.works.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserRestController {

    final UserService userService;
    final AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public ResponseEntity register(@Valid @RequestBody User user){

        return userService.register(user);
    }
    @PostMapping("/login")
    public User login(@RequestBody User user){
        return userService.login(user.getEmail(), user.getPassword());
    }

}

