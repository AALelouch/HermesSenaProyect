package com.sena.proyect.hermes.of.cheese.business.service.delivery;

import com.sena.proyect.hermes.of.cheese.presentation.controller.request.DeliveryRequest;
import com.sena.proyect.hermes.of.cheese.presentation.controller.response.DeliveryResponse;

import java.util.List;

public interface DeliveryCrudService{
    void createDelivery(DeliveryRequest deliveryRequest);
    void updateDelivery(DeliveryRequest deliveryRequest, Long id);
    DeliveryResponse findById(Long id);
    void deleteDelivery(Long id);

    List<DeliveryResponse> findAll();


}
