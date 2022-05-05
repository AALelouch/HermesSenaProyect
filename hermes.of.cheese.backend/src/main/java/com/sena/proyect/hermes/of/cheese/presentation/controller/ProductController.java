package com.sena.proyect.hermes.of.cheese.presentation.controller;

import com.sena.proyect.hermes.of.cheese.business.service.product.interfaceforproduct.ProductCrudService;
import com.sena.proyect.hermes.of.cheese.presentation.controller.request.ProductRequest;
import com.sena.proyect.hermes.of.cheese.presentation.controller.response.ProductResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductCrudService productService;

    @GetMapping("/all")
    public ResponseEntity<List<ProductResponse>> allProducts(){
        return ResponseEntity.ok(productService.findAll());
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<ProductResponse> getProduct(@PathVariable Long id){
        return ResponseEntity.ok(productService.findById(id));
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<ProductResponse> getProductByName(@PathVariable String name){
        return ResponseEntity.ok(productService.findByName(name));
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void createProduct(@RequestBody ProductRequest productRequest){
        productService.createProduct(productRequest);;
    }

    @PutMapping("/update/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateProduct(@RequestBody ProductRequest productRequest, @PathVariable Long id){
        productService.updateProduct(productRequest, id);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable Long id){
        productService.deleteProduct(id);
    }

}
