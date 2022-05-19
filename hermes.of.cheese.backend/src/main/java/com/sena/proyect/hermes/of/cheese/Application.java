package com.sena.proyect.hermes.of.cheese;

import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@SecurityScheme(
		name = "bearerAuth",
		description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
		type = SecuritySchemeType.HTTP,
		scheme = "bearer",
		bearerFormat = "JWT",
		in = SecuritySchemeIn.HEADER)
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
