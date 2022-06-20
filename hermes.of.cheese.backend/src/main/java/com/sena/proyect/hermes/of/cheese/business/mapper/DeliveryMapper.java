package com.sena.proyect.hermes.of.cheese.business.mapper;

import com.sena.proyect.hermes.of.cheese.persistence.entity.Delivery;
import com.sena.proyect.hermes.of.cheese.persistence.entity.DeliveryProduct;
import com.sena.proyect.hermes.of.cheese.presentation.controller.request.DeliveryRequest;
import com.sena.proyect.hermes.of.cheese.presentation.controller.response.DeliveryProductResponse;
import com.sena.proyect.hermes.of.cheese.presentation.controller.response.DeliveryResponse;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DeliveryMapper {
    DeliveryResponse toResponse (Delivery delivery);
    Delivery toEntity(DeliveryRequest deliveryRequest);

    DeliveryProductResponse toDeliveryProductResponse(DeliveryProduct deliveryProduct);
}
