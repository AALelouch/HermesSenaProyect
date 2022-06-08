package com.sena.proyect.hermes.of.cheese.presentation.controller;

import com.sena.proyect.hermes.of.cheese.business.service.delivery.DeliveryCrudService;
import com.sena.proyect.hermes.of.cheese.presentation.controller.request.DeliveryRequest;
import com.sena.proyect.hermes.of.cheese.presentation.controller.response.DeliveryResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/delivery")
@SecurityRequirement(name = "bearerAuth")
@CrossOrigin(origins = "http://localhost:4200")
public class DeliveryController {

    @Autowired
    DeliveryCrudService deliveryCrudService;

    @GetMapping("/all")
    public List<DeliveryResponse> findAll(){
        return deliveryCrudService.findAll();
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void createDelivery(@RequestBody DeliveryRequest deliveryRequest){
        deliveryCrudService.createDelivery(deliveryRequest);
    }

    @PutMapping("/update/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateDelivery(@RequestBody DeliveryRequest deliveryRequest, @PathVariable Long id){
        deliveryCrudService.updateDelivery(deliveryRequest, id);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id){
        deliveryCrudService.deleteDelivery(id);
    }

}
