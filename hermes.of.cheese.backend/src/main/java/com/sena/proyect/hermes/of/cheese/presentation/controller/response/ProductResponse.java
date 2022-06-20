package com.sena.proyect.hermes.of.cheese.presentation.controller.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductResponse {
    private String name;
    private Double quantityInInventory;
    private Double price;

}