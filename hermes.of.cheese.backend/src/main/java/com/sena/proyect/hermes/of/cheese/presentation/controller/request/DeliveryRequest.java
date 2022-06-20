package com.sena.proyect.hermes.of.cheese.presentation.controller.request;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class DeliveryRequest {
    private String nameCustomer;
    private String addressCustomer;
    private String phoneCustomer;
    private List<DeliveryProductRequest> deliveryProductName = new ArrayList<>();

    @JsonIgnore
    private LocalDateTime dateDelivery = LocalDateTime.now();


}
