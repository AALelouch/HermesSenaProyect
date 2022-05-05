package com.sena.proyect.hermes.of.cheese.presentation.controller.request;

import com.sena.proyect.hermes.of.cheese.persistence.entity.Product;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
public class OrderRequest {

    private String fullNameOfCustomer;
    private String address;
    private String phone;

    private Double quantityCheese;
    private Double quantityDoubleCreamCheese;
    private Double quantityButter;

}
