package com.sena.proyect.hermes.of.cheese.business.service.product;

import com.sena.proyect.hermes.of.cheese.presentation.controller.request.ProductRequest;
import com.sena.proyect.hermes.of.cheese.presentation.controller.response.ProductResponse;

import java.util.List;

public interface ProductCrudService {
    void createProduct(ProductRequest productRequest);
    void updateProduct(ProductRequest productRequest);
    void deleteProduct(String name);

    ProductResponse findByName(String name);
    List<ProductResponse> findAll();
}
