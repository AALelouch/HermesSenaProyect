package com.sena.proyect.hermes.of.cheese.business.mapper;

import com.sena.proyect.hermes.of.cheese.persistence.entity.Order;
import com.sena.proyect.hermes.of.cheese.persistence.entity.Product;
import com.sena.proyect.hermes.of.cheese.presentation.controller.request.OrderRequest;
import com.sena.proyect.hermes.of.cheese.presentation.controller.request.ProductOrderRequest;
import com.sena.proyect.hermes.of.cheese.presentation.controller.response.OrderResponse;
import com.sena.proyect.hermes.of.cheese.presentation.controller.response.ProductOrderResponse;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    Product productOrderRequestToProduct (ProductOrderRequest productOrderRequest);
    ProductOrderRequest productToProductOrderRequest (Product product);

    Product productOrderResponseToProduct(ProductOrderResponse productOrderResponse);
    ProductOrderResponse productToProductOrderResponse(Product product);

    Order orderRequestToOrder(OrderRequest orderRequest);
    OrderRequest orderToOrderRequest(Order order);

    OrderResponse orderToOrderResponse(Order order);
    Order orderResponseToOrder(OrderResponse orderResponse);
}
