package com.RandomCommerce.App.Service;

import com.RandomCommerce.App.Models.Product;
import com.RandomCommerce.App.Repository.ProductRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    ProductRepo repo;

    ProductService(ProductRepo repository){
        this.repo = repository;
    }

    public List<Product> getAllProducts() {
        return repo.findAll();
    }
}
