package com.sena.proyect.hermes.of.cheese.business.service.order.utility;


import com.sena.proyect.hermes.of.cheese.business.service.exception.BadRequestException;

public class ValidateQuantity {
    public static Boolean validateQuantityProduct(Double quantityProduct, Double quantityRequest) {
        if (quantityProduct >= quantityRequest) {
            return true;
        } else {
           throw new BadRequestException("La cantidad solicitada es mayor a la disponible");
        }
    }
}