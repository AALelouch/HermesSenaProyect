package com.sena.proyect.hermes.of.cheese.persistence.repository;

import com.sena.proyect.hermes.of.cheese.persistence.entity.Delivery;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface DeliveryRepository extends MongoRepository<Delivery, Long> {

    @Query ("{'name': ?0}")
    Optional<Delivery> findByNameCustomer(String nameCustomer);

}
