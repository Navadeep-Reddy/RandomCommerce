package com.RandomCommerce.App.Service;

import com.RandomCommerce.App.Models.Product;
import com.RandomCommerce.App.Repository.ProductRepo;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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

    public Product getProductById(int prodId) {
        return repo.findById(prodId).orElse(null);
    }

    public Product addProduct(Product product, MultipartFile imageFile) throws IOException {

        product.setImageName(imageFile.getOriginalFilename());
        product.setImageType(imageFile.getContentType());
        product.setImageData(imageFile.getBytes());
        return repo.save(product);
    }


    public Product updateProduct(int prodId, Product product, MultipartFile file) throws IOException {
        product.setImageName(file.getOriginalFilename());
        product.setImageType(file.getContentType());
        product.setImageData(file.getBytes());

        Product alreadyExists = repo.findById(prodId).orElse(null);

        product.setId(prodId);

        if (alreadyExists == null){
            return null;
        }

        return repo.save(product);
    }
}
