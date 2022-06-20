package com.sena.proyect.hermes.of.cheese.presentation.controller;

import com.sena.proyect.hermes.of.cheese.business.service.product.ProductCrudService;
import com.sena.proyect.hermes.of.cheese.presentation.controller.request.ProductRequest;
import com.sena.proyect.hermes.of.cheese.presentation.controller.response.ProductResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@SecurityRequirement(name = "bearerAuth")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class ProductController {
    @Autowired
    private ProductCrudService productService;

    @GetMapping("/all")
    public ResponseEntity<List<ProductResponse>> allProducts(){
        return ResponseEntity.ok(productService.findAll());
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<ProductResponse> getProductByName(@PathVariable String name) {
        return ResponseEntity.ok(productService.findByName(name));
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void createProduct(@RequestBody ProductRequest productRequest){
        productService.createProduct(productRequest);;
    }

    @PutMapping("/update/{name}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateProduct(@RequestBody ProductRequest productRequest, @PathVariable String name){
        productService.updateProduct(productRequest, name);
    }

    @DeleteMapping("/delete/{name}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable String name){
        productService.deleteProduct(name);
    }

}
