package com.sena.proyect.hermes.of.cheese.persistence.repository;

import com.sena.proyect.hermes.of.cheese.persistence.entity.Delivery;
import org.apache.catalina.LifecycleState;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface DeliveryRepository extends MongoRepository<Delivery, Long> {

    @Query ("{'nameCustomer': ?0}")
    List<Delivery> findByNameCustomer(String nameCustomer);

}
