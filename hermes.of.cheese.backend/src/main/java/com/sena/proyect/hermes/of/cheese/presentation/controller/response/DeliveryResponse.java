package com.sena.proyect.hermes.of.cheese.presentation.controller.response;

import com.sena.proyect.hermes.of.cheese.persistence.entity.DeliveryProduct;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class DeliveryResponse {
    private Long id;
    private String nameCustomer;
    private String addressCustomer;
    private String phoneCustomer;
    private List<DeliveryProductResponse> deliveryProduct = new ArrayList<>();
    private LocalDateTime dateDelivery;

    private Double totalOfAll = 0.0;
    private boolean status;

}
