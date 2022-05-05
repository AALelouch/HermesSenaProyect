package com.sena.proyect.hermes.of.cheese.persistence.repository;

import com.sena.proyect.hermes.of.cheese.persistence.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("select p from Product p where p.name = ?1")
    Optional<Product> findByName(String name);
}
