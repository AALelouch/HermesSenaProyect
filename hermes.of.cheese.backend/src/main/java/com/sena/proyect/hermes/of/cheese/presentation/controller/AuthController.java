package com.sena.proyect.hermes.of.cheese.presentation.controller;

import com.sena.proyect.hermes.of.cheese.persistence.entity.User;
import com.sena.proyect.hermes.of.cheese.persistence.repository.UserRepository;
import com.sena.proyect.hermes.of.cheese.presentation.controller.request.LoginRequest;
import com.sena.proyect.hermes.of.cheese.presentation.controller.response.JwtAuthResponse;
import com.sena.proyect.hermes.of.cheese.presentation.security.jwt.JwtTokenProvider;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Objects;

@RestController
@RequestMapping("/auth")
@SecurityRequirement(name = "bearerAuth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @PostMapping("/login")
    public ResponseEntity<JwtAuthResponse> authenticateUser(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtTokenProvider.generateToken(authentication);

        return ResponseEntity.ok(new JwtAuthResponse(jwt));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signupUser(@RequestBody User signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return new ResponseEntity<>("Fail -> Username is already taken!", HttpStatus.BAD_REQUEST);
        }if (Objects.equals(signUpRequest.getUsername(), "")){
            return  new ResponseEntity<>("Fail -> Username don't be blank", HttpStatus.BAD_REQUEST);
        }if (signUpRequest.getPassword().length() < 8){
            return new ResponseEntity<>("Fail -> Password must have almost 8 characters", HttpStatus.BAD_REQUEST);
        }

        signUpRequest.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        userRepository.save(signUpRequest);


        return new ResponseEntity<>("User registered successfully!", HttpStatus.OK);
    }

}
