package com.sena.proyect.hermes.of.cheese.business.service.exception;

public class NotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;
    private String message;

    public NotFoundException(String message) {
        super();
        this.message = message;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
