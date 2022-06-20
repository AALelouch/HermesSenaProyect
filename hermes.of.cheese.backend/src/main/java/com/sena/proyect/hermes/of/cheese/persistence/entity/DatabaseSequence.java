package com.sena.proyect.hermes.of.cheese.persistence.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "DatabaseSequence")
@Getter
@Setter
public class DatabaseSequence {
    @Id
    String id;

    private Long seq;
}
