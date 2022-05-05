package com.sena.proyect.hermes.of.cheese.persistence.repository;

import com.sena.proyect.hermes.of.cheese.persistence.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findByDni(String dni);

    @Query(value = "select u from User u where u.status = 'activo'")
    Optional<List<User>> findAllActive();

    Boolean existsByUsername(String username);
}
