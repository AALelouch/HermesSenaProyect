package com.sena.proyect.hermes.of.cheese.business.service.product;

import com.sena.proyect.hermes.of.cheese.business.mapper.ProductMapper;
import com.sena.proyect.hermes.of.cheese.business.service.exception.NotFoundException;
import com.sena.proyect.hermes.of.cheese.business.service.product.interfaceforproduct.ProductCrudService;
import com.sena.proyect.hermes.of.cheese.persistence.entity.Product;
import com.sena.proyect.hermes.of.cheese.persistence.repository.ProductRepository;
import com.sena.proyect.hermes.of.cheese.presentation.controller.request.ProductRequest;
import com.sena.proyect.hermes.of.cheese.presentation.controller.response.ProductResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductCrudServiceImpl implements ProductCrudService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ProductMapper productMapper;

    @Override
    public void createProduct(ProductRequest productRequest) {
        Product product = productMapper.productRequestToProduct(productRequest);
        productRepository.save(product);
    }

    @Override
    public void updateProduct(ProductRequest productRequest, Long id) {
        Product product = productMapper.productRequestToProduct(productRequest);
        product.setId(id);
        productRepository.save(product);
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    public ProductResponse findById(Long id) {
        return productRepository.findById(id).map
                (productMapper::productToProductResponse).orElseThrow(() -> new NotFoundException("Producto no encontrado"));
    }

    @Override
    public ProductResponse findByName(String name) {
        return productRepository.findByName(name).map(productMapper::productToProductResponse).orElseThrow(() -> new NotFoundException("Producto no encontrado"));
    }

    @Override
    public List<ProductResponse> findAll() {
        return productRepository.findAll().stream().map(productMapper::productToProductResponse).collect(java.util.stream.Collectors.toList());
    }
}
