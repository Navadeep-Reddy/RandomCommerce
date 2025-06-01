package com.RandomCommerce.App.Controller;

import com.RandomCommerce.App.Models.Product;
import com.RandomCommerce.App.Service.ProductService;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/product/{prodId}")
    public Product getProduct(@PathVariable int prodId){
        return productService.getProductById(prodId);
    }
}
