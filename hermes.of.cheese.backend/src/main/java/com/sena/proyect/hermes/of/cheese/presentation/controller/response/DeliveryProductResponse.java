package com.sena.proyect.hermes.of.cheese.presentation.controller.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DeliveryProductResponse {
    private String name;
    private Double price;
    private Double quantity;
    private Double total;
}
