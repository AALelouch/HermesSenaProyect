package com.sena.proyect.hermes.of.cheese.persistence.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Data
@Document(collection = "Delivery")
public class Delivery {

    @Transient
    public static final String SEQUENCE_NAME = "delivery_sequence";
    @Id
    private Long id;
    private String nameCustomer;
    private String addressCustomer;
    private String phoneCustomer;
    private List<DeliveryProduct> deliveryProduct = new ArrayList<>();
    private Double totalOfAll = 0.0;
    private LocalDateTime dateDelivery;
    private boolean status = true;



}
