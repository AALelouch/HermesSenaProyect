package com.sena.proyect.hermes.of.cheese.business.service.product.interfaceforproduct;

import com.sena.proyect.hermes.of.cheese.presentation.controller.request.ProductRequest;
import com.sena.proyect.hermes.of.cheese.presentation.controller.response.ProductResponse;

import java.util.List;

public interface ProductCrudService {
    void createProduct(ProductRequest productRequest);
    void updateProduct(ProductRequest productRequest, Long id);
    void deleteProduct(Long id);
    ProductResponse findById(Long id);
    ProductResponse findByName(String name);
    List<ProductResponse> findAll();
}
