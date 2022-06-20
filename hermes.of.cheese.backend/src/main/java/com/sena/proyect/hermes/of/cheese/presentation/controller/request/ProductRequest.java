package com.sena.proyect.hermes.of.cheese.presentation.controller.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductRequest {
    private String name;
    private Double quantityInInventory;
    private Double price;
}
