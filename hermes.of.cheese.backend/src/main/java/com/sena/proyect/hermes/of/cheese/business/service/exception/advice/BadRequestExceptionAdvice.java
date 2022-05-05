package com.sena.proyect.hermes.of.cheese.business.service.exception.advice;

import com.sena.proyect.hermes.of.cheese.business.service.exception.BadRequestException;
import com.sena.proyect.hermes.of.cheese.business.service.exception.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class BadRequestExceptionAdvice {
    @ResponseBody
    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    @ExceptionHandler(value = BadRequestException.class)
    public String notFound(BadRequestException ex) {
        return ex.getMessage();
    }
}
