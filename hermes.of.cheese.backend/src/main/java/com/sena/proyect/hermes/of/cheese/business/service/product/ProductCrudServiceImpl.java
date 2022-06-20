package com.sena.proyect.hermes.of.cheese.business.service.product;

import com.sena.proyect.hermes.of.cheese.business.mapper.ProductMapper;
import com.sena.proyect.hermes.of.cheese.business.service.exception.BadRequestException;
import com.sena.proyect.hermes.of.cheese.business.service.exception.NotFoundException;
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
    private ProductRepository productRepository;

    @Autowired
    private ProductMapper productMapper;

    @Override
    public void createProduct(ProductRequest productRequest) {
        Product product = productMapper.toProduct(productRequest);
        if (productRepository.findById(product.getName()).isPresent()){
            throw new BadRequestException("El producto ya existe");
        }
        productRepository.save(product);
    }

    @Override
    public void updateProduct(ProductRequest productRequest, String name) {
        Product product = productMapper.toProduct(productRequest);

        if (productRepository.findById(name).isEmpty()){
            throw new NotFoundException("El producto que desea actualizar no existe");
        }

        productRepository.save(product);
    }

    @Override
    public void deleteProduct(String name) {
        productRepository.delete(productRepository.findById(name).orElseThrow(()-> new NotFoundException("Producto no encontrado")));
    }

    @Override
    public ProductResponse findByName(String name) {
        return productRepository.findById(name).map(productMapper::toProductResponse).orElseThrow(() -> new NotFoundException("Producto no encontrado"));
    }

    @Override
    public List<ProductResponse> findAll() {
        return productRepository.findAll().stream().map(productMapper::toProductResponse).collect(java.util.stream.Collectors.toList());
    }
}
