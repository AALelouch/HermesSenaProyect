package com.sena.proyect.hermes.of.cheese.business.service.sequence.generator;

import com.sena.proyect.hermes.of.cheese.persistence.entity.Delivery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;

public class DeliveryModelListener extends AbstractMongoEventListener<Delivery> {

    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    @Override
    public void onBeforeConvert(BeforeConvertEvent<Delivery> event) {
        if (event.getSource().getId() < 1) {
            event.getSource().setId(sequenceGeneratorService.generateSequence("delivery_sequence"));
        }
    }
}
