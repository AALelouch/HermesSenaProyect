package com.sena.proyect.hermes.of.cheese.persistence.repository;

import com.sena.proyect.hermes.of.cheese.persistence.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);
    Optional<User> findByDni(String dni);

    @Query("{'status': true}")
    Optional<List<User>> findAllActive();
    Boolean existsByUsername(String username);
}
