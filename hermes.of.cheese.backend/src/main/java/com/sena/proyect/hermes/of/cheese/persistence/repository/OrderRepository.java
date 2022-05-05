package com.sena.proyect.hermes.of.cheese.persistence.repository;

import com.sena.proyect.hermes.of.cheese.persistence.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {
    @Query("SELECT o FROM Order o WHERE o.statusOrder = ?1")
    Optional<List<Order>> findByStatus(String status);

    @Query("SELECT o FROM Order o WHERE o.fullNameOfCustomer = ?1")
    Optional<List<Order>> findByName(String fullNameOfCustomer);
}
