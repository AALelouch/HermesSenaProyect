package com.sena.proyect.hermes.of.cheese.presentation.controller.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductOrderResponse {
    private Long id;
    private String name;
    private Double quantity;
    private Double price;
}

