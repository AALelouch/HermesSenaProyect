package com.sena.proyect.hermes.of.cheese.persistence.repository;

import com.sena.proyect.hermes.of.cheese.persistence.entity.Delivery;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DeliveryRepository extends MongoRepository<Delivery, Long> {

}
