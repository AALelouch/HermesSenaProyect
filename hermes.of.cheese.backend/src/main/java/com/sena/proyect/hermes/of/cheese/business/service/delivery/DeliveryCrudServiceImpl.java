package com.sena.proyect.hermes.of.cheese.business.service.delivery;

import com.sena.proyect.hermes.of.cheese.business.mapper.DeliveryMapper;
import com.sena.proyect.hermes.of.cheese.business.service.exception.BadRequestException;
import com.sena.proyect.hermes.of.cheese.business.service.exception.NotFoundException;
import com.sena.proyect.hermes.of.cheese.business.service.sequence.generator.SequenceGeneratorService;
import com.sena.proyect.hermes.of.cheese.persistence.entity.Delivery;
import com.sena.proyect.hermes.of.cheese.persistence.entity.DeliveryProduct;
import com.sena.proyect.hermes.of.cheese.persistence.entity.Product;
import com.sena.proyect.hermes.of.cheese.persistence.repository.DeliveryRepository;
import com.sena.proyect.hermes.of.cheese.persistence.repository.ProductRepository;
import com.sena.proyect.hermes.of.cheese.presentation.controller.request.DeliveryRequest;
import com.sena.proyect.hermes.of.cheese.presentation.controller.response.DeliveryResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class DeliveryCrudServiceImpl implements DeliveryCrudService{

    @Autowired
    DeliveryRepository deliveryRepository;

    @Autowired
    ProductRepository  productRepository;

    @Autowired
    DeliveryMapper deliveryMapper;

    @Autowired
    SequenceGeneratorService sequenceGeneratorService;

    @Override
    public void createDelivery(DeliveryRequest deliveryRequest) {
        //Mapper delivery
        Delivery delivery = deliveryMapper.toEntity(deliveryRequest);

        //Set autoincrement id with sequenceGeneratorService
        delivery.setId(sequenceGeneratorService.generateSequence(Delivery.SEQUENCE_NAME));

        //All products
        List<Product> products = productRepository.findAll();

        //Products for set in delivery
        List<DeliveryProduct> deliveryProducts = new ArrayList<>();

        //Set each product in the List of document
        //For each element of delivery product name, the method set a delivery product for the document
        deliveryRequest.getDeliveryProductName().forEach(deliveryProductName -> products.forEach(product -> {

            if (Objects.equals(deliveryProductName.getName().toLowerCase(), product.getName().toLowerCase())) {
                DeliveryProduct deliveryProduct = new DeliveryProduct();
                deliveryProduct.setName(product.getName());
                deliveryProduct.setPrice(product.getPrice());
                deliveryProduct.setQuantity(deliveryProductName.getQuantity());
                deliveryProduct.setTotal((deliveryProduct.getQuantity() * deliveryProduct.getPrice()));

                deliveryProducts.add(deliveryProduct);

                //Sum total price of delivery
                delivery.setTotalOfAll(delivery.getTotalOfAll() + deliveryProduct.getTotal());

                if (product.getQuantityInInventory() < deliveryProduct.getQuantity()) {
                    throw new BadRequestException("La cantidad del producto " + deliveryProduct.getName() + " no esta disponible");
                }

                //Set quantity of product in the inventory
                product.setQuantityInInventory(product.getQuantityInInventory() - deliveryProductName.getQuantity());
            }
        }));

        if (deliveryProducts.size() < deliveryRequest.getDeliveryProductName().size()){
            throw new BadRequestException("No se ha encontrado el nombre del producto");
        }

        delivery.setDeliveryProduct(deliveryProducts);
        productRepository.saveAll(products);

        deliveryRepository.save(delivery);
    }

    @Override
    public void updateDelivery(DeliveryRequest deliveryRequest, Long id) {
        //Mapper delivery
        Delivery delivery = deliveryMapper.toEntity(deliveryRequest);

        //Set autoincrement id with sequenceGeneratorService
        delivery.setId(id);

        //All products
        List<Product> products = productRepository.findAll();

        //Products for set in delivery
        List<DeliveryProduct> deliveryProducts = new ArrayList<>();

        //Set each product in the List of document
        //For each element of delivery product name, the method set a delivery product for the document
        deliveryRequest.getDeliveryProductName().forEach(deliveryProductName -> products.forEach(product -> {

            if (Objects.equals(deliveryProductName.getName().toLowerCase(), product.getName().toLowerCase())) {
                DeliveryProduct deliveryProduct = new DeliveryProduct();
                deliveryProduct.setName(product.getName());
                deliveryProduct.setPrice(product.getPrice());
                deliveryProduct.setQuantity(deliveryProductName.getQuantity());
                deliveryProduct.setTotal((deliveryProduct.getQuantity() * deliveryProduct.getPrice()));

                deliveryProducts.add(deliveryProduct);

                //Sum total price of delivery
                delivery.setTotalOfAll(delivery.getTotalOfAll() + deliveryProduct.getTotal());

                if (product.getQuantityInInventory() < deliveryProduct.getQuantity()) {
                    throw new BadRequestException("La cantidad del producto " + deliveryProduct.getName() + " no esta disponible");
                }

                //Set quantity of product in the inventory
                product.setQuantityInInventory(product.getQuantityInInventory() - deliveryProductName.getQuantity());
            }
        }));

        if (deliveryProducts.size() < deliveryRequest.getDeliveryProductName().size()){
            throw new BadRequestException("No se ha encontrado el nombre del producto");
        }

        delivery.setDeliveryProduct(deliveryProducts);
        productRepository.saveAll(products);

        deliveryRepository.save(delivery);

    }

    @Override
    public List<DeliveryResponse> findAll() {
        return deliveryRepository.findAll().stream().map(deliveryMapper::toResponse).collect(Collectors.toList());
    }

    @Override
    public DeliveryResponse findById(Long id) {
        return deliveryRepository.findById(id).map(deliveryMapper::toResponse).orElseThrow(()->new NotFoundException("Pedido con id: " + id + " no ha sido encontrado"));
    }

    @Override
    public void deleteDelivery(Long id) {

        if (deliveryRepository.findById(id).isEmpty()){
            throw new NotFoundException("No se ha encontrado el producto con id: " + id);
        }

        deliveryRepository.deleteById(id);
    }
}
