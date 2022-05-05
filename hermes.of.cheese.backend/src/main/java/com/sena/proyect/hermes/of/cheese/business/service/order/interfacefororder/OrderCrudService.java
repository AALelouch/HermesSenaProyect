package com.sena.proyect.hermes.of.cheese.business.service.order.interfacefororder;

import com.sena.proyect.hermes.of.cheese.presentation.controller.request.OrderRequest;
import com.sena.proyect.hermes.of.cheese.presentation.controller.response.OrderResponse;

import java.util.List;

public interface OrderCrudService {
    void createOrder(OrderRequest productRequest);
    void updateOrder(OrderRequest productRequest, Long id);
    void deleteOrder(Long id);
    OrderResponse findById(Long id);
    List<OrderResponse> findByName(String name);
    List<OrderResponse> findAll();
    List<OrderResponse> findByStatus(String status);
}
