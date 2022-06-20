package com.sena.proyect.hermes.of.cheese.business.service.delivery;

import com.sena.proyect.hermes.of.cheese.presentation.controller.response.DeliveryResponse;

import java.util.List;

public interface FindByNameQuery {
    List<DeliveryResponse> findByName(String name);
}
