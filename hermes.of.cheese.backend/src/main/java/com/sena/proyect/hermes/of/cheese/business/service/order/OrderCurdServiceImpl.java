package com.sena.proyect.hermes.of.cheese.business.service.order;

import com.sena.proyect.hermes.of.cheese.business.mapper.OrderMapper;
import com.sena.proyect.hermes.of.cheese.business.service.exception.NotFoundException;
import com.sena.proyect.hermes.of.cheese.business.service.order.interfacefororder.OrderCrudService;
import com.sena.proyect.hermes.of.cheese.business.service.order.utility.ValidateQuantity;
import com.sena.proyect.hermes.of.cheese.persistence.entity.Order;
import com.sena.proyect.hermes.of.cheese.persistence.entity.Product;
import com.sena.proyect.hermes.of.cheese.persistence.repository.OrderRepository;
import com.sena.proyect.hermes.of.cheese.persistence.repository.ProductRepository;
import com.sena.proyect.hermes.of.cheese.presentation.controller.request.OrderRequest;
import com.sena.proyect.hermes.of.cheese.presentation.controller.response.OrderResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class OrderCurdServiceImpl implements OrderCrudService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderMapper orderMapper;

    @Autowired
    ProductRepository productRepository;

    @Override
    public void createOrder(OrderRequest orderRequest) {
        Order order = orderMapper.orderRequestToOrder(orderRequest);

        Set<Product> products = new HashSet<>();

        if (order.getQuantityCheese() > 0) {
            Product product = productRepository.findByName("Queso Criollo").orElseThrow(() -> new NotFoundException("Product not found"));
            ValidateQuantity.validateQuantityProduct(product.getQuantity(), order.getQuantityCheese());
            product.setQuantity(product.getQuantity() - order.getQuantityCheese());
            order.setTotalPriceCheese(order.getQuantityCheese() * product.getPrice());
            products.add(product);
            productRepository.save(product);
        }if (order.getQuantityDoubleCreamCheese() > 0) {
            Product product = productRepository.findByName("Quesillo").orElseThrow(() -> new NotFoundException("Product not found"));
            ValidateQuantity.validateQuantityProduct(product.getQuantity(), order.getQuantityDoubleCreamCheese());
            product.setQuantity(product.getQuantity() - order.getQuantityDoubleCreamCheese());
            order.setTotalPriceDoubleCreamCheese(order.getQuantityDoubleCreamCheese() * product.getPrice());
            products.add(product);
            productRepository.save(product);
        }if (order.getQuantityButter() > 0) {
            Product product = productRepository.findByName("Mantequilla").orElseThrow(() -> new NotFoundException("Product not found"));
            ValidateQuantity.validateQuantityProduct(product.getQuantity(), order.getQuantityButter());
            product.setQuantity(product.getQuantity() - order.getQuantityButter());
            order.setTotalPriceButter(order.getQuantityButter() * product.getPrice());
            products.add(product);
            productRepository.save(product);
        }

        order.setTotalPrice(order.getTotalPriceCheese() + order.getTotalPriceDoubleCreamCheese() + order.getTotalPriceButter());
        order.setProducts(products);
        order.setStatusOrder("Pendiente");
        orderRepository.save(order);
    }


    @Override
    public void updateOrder(OrderRequest orderRequest, Long id) {

        if (orderRepository.findById(id).isPresent()) {
            Order orderToUpdate = orderMapper.orderRequestToOrder(orderRequest);
            orderToUpdate.setId(id);
            orderRepository.save(orderToUpdate);
        }else{
            throw new NotFoundException("Order not found");
        }

    }

    @Override
    public void deleteOrder(Long id) {
        Order orderToDelete = orderRepository.findById(id).orElseThrow(() -> new NotFoundException("Order not found"));
        orderToDelete.setStatusOrder("Cancelado");
        orderRepository.save(orderToDelete);
    }

    @Override
    public OrderResponse findById(Long id) {
        return orderRepository.findById(id).map(orderMapper::orderToOrderResponse).orElseThrow(() -> new NotFoundException("Order not found"));
    }

    @Override
    public List<OrderResponse> findByName(String name) {
        List<Order> order = orderRepository.findByName(name).orElseThrow(() -> new NotFoundException("Order not found"));
        return order.stream().map(orderMapper::orderToOrderResponse).collect(Collectors.toList());
    }

    @Override
    public List<OrderResponse> findAll() {
        return orderRepository.findAll().stream().map(orderMapper::orderToOrderResponse).collect(Collectors.toList());
    }

    @Override
    public List<OrderResponse> findByStatus(String status) {
        List<Order> order = orderRepository.findByStatus(status).orElseThrow(() -> new NotFoundException("Order not found"));
        return order.stream().map(orderMapper::orderToOrderResponse).collect(Collectors.toList());
    }
}
