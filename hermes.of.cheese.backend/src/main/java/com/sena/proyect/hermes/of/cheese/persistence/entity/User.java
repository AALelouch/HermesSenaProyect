package com.sena.proyect.hermes.of.cheese.persistence.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "User")
public class User {
    private String dni;
    private String name;
    private String lastName;
    private String username;
    private String password;
    private boolean status;
}
