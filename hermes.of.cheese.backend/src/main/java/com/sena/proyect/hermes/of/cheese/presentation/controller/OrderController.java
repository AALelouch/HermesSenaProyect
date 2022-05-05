package com.sena.proyect.hermes.of.cheese.presentation.controller;

import com.sena.proyect.hermes.of.cheese.business.service.order.interfacefororder.OrderCrudService;
import com.sena.proyect.hermes.of.cheese.presentation.controller.request.OrderRequest;
import com.sena.proyect.hermes.of.cheese.presentation.controller.response.OrderResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderCrudService orderService;

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody OrderRequest order){
        orderService.createOrder(order);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<OrderResponse> getById(@PathVariable("id") Long id){
        return ResponseEntity.ok(orderService.findById(id));
    }

    @GetMapping("/")
    public ResponseEntity<List<OrderResponse>> getAll(){
        return ResponseEntity.ok(orderService.findAll());
    }

    @GetMapping("/byName/{name}")
    public ResponseEntity<List<OrderResponse>> getByName(@PathVariable("name") String name){
        return ResponseEntity.ok(orderService.findByName(name));
    }

    @GetMapping("/byStatus/{status}")
    public ResponseEntity<List<OrderResponse>> getByStatus(@PathVariable("status") String status){
        return ResponseEntity.ok(orderService.findByStatus(status));
    }

    @PutMapping("/update/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable("id") Long id, @RequestBody OrderRequest order){
        orderService.updateOrder(order, id);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") Long id){
        orderService.deleteOrder(id);
    }


}