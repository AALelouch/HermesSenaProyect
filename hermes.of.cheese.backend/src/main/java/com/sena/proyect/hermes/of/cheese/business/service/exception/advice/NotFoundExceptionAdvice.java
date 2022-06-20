package com.sena.proyect.hermes.of.cheese.business.service.exception.advice;

import com.sena.proyect.hermes.of.cheese.business.service.exception.NotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class NotFoundExceptionAdvice {
    @ResponseBody
    @ResponseStatus(value = org.springframework.http.HttpStatus.NOT_FOUND)
    @ExceptionHandler(value = NotFoundException.class)
    public String notFound(NotFoundException ex) {
        return ex.getMessage();
    }
}
