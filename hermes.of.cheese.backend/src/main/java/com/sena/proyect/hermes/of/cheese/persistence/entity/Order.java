package com.sena.proyect.hermes.of.cheese.persistence.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullNameOfCustomer;
    private String address;
    private String phone;

    private Double quantityCheese;
    private Double quantityDoubleCreamCheese;
    private Double quantityButter;

    private Double totalPriceCheese = 0.0;
    private Double totalPriceDoubleCreamCheese = 0.0;
    private Double totalPriceButter = 0.0;

    private Double totalPrice = 0.0;

    private String statusOrder;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "order_product",
            joinColumns = @JoinColumn(name = "order_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "product_id", referencedColumnName = "id"))
    private Set<Product> products = new HashSet<>();
}
