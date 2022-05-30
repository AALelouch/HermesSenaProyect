package com.sena.proyect.hermes.of.cheese.business.service.delivery;

import com.sena.proyect.hermes.of.cheese.business.mapper.DeliveryMapper;
import com.sena.proyect.hermes.of.cheese.business.service.exception.NotFoundException;
import com.sena.proyect.hermes.of.cheese.business.service.sequence.generator.SequenceGeneratorService;
import com.sena.proyect.hermes.of.cheese.persistence.entity.DatabaseSequence;
import com.sena.proyect.hermes.of.cheese.persistence.repository.DeliveryRepository;
import com.sena.proyect.hermes.of.cheese.presentation.controller.response.DeliveryResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FindByNameQueryImpl implements FindByNameQuery {

    @Autowired
    private DeliveryRepository deliveryRepository;

    @Autowired
    private DeliveryMapper deliveryMapper;


    @Override
    public List<DeliveryResponse> findByName(String name) {
        return deliveryRepository.findByNameCustomer(name).stream()
                .map(deliveryMapper::toResponse)
                .collect(Collectors.toList());
    }
}
