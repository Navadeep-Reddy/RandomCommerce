package com.RandomCommerce.App.Controller;

import com.RandomCommerce.App.Models.Product;
import com.RandomCommerce.App.Service.ProductService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ProductController {

    ProductService productService;

    ProductController(ProductService service){
        this.productService = service;
    }

    @RequestMapping("/")
    public String test(){
        return "Hello World!";
    }

    @GetMapping("/products")
    public List<Product> getAll(){
        return productService.getAllProducts();
    }
}
