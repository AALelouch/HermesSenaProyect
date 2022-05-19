package com.sena.proyect.hermes.of.cheese.presentation.controller.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JwtAuthResponse {
    private String token;
    private String type = "Bearer";

    public JwtAuthResponse(String accessToken) {
        this.token = accessToken;
    }
}
