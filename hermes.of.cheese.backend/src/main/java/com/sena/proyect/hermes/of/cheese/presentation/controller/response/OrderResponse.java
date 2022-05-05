package com.sena.proyect.hermes.of.cheese.presentation.controller.response;

import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
public class OrderResponse {
    private String fullNameOfCustomer;
    private String address;
    private String phone;

    private Double quantityCheese;
    private Double quantityDoubleCreamCheese;
    private Double quantityButter;

    private Double totalPriceCheese;
    private Double totalPriceDoubleCreamCheese;
    private Double totalPriceButter;

    private Double totalPrice;

    private String statusOrder;

    private Set<ProductOrderResponse> products = new HashSet<>();

    @Override
    public String toString() {
        return "OrderResponse{" +
                "fullNameOfCustomer='" + fullNameOfCustomer + '\'' +
                ", address='" + address + '\'' +
                ", phone='" + phone + '\'' +
                ", quantityCheese=" + quantityCheese +
                ", quantityDoubleCreamCheese=" + quantityDoubleCreamCheese +
                ", quantityButter=" + quantityButter +
                ", totalPriceCheese=" + totalPriceCheese +
                ", totalPriceDoubleCreamCheese=" + totalPriceDoubleCreamCheese +
                ", totalPriceButter=" + totalPriceButter +
                ", totalPrice=" + totalPrice +
                ", statusOrder='" + statusOrder + '\'' +
                ", products=" + products +
                '}';
    }
}
