package com.RandomCommerce.App.Controller;

import com.RandomCommerce.App.Models.Product;
import com.RandomCommerce.App.Service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(maxAge = 36000)
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
    public ResponseEntity<Product> getProduct(@PathVariable int prodId){
        Product product = productService.getProductById(prodId);

        if (product != null)
            return new ResponseEntity<>(product, HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

    }

    @PostMapping("/add")
    public ResponseEntity<?> addProduct(@RequestPart Product product, @RequestPart MultipartFile imageFile) throws IOException {
        product = productService.addProduct(product, imageFile);

        if (product != null){
            return new ResponseEntity<>(product, HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
    }

    @GetMapping("/product/image/{prodId}")
    public ResponseEntity<byte[]> getProductImage(@PathVariable int prodId){
        Product product = productService.getProductById(prodId);

        if (product == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(product.getImageData());

    }

    @PutMapping("/product/update/{prodId}")
    public ResponseEntity<?> updateProduct(@PathVariable int prodId, @RequestPart Product product, @RequestPart MultipartFile file) throws IOException {
        Product item = productService.updateProduct(prodId, product, file);

        if (item != null){
            return ResponseEntity.ok().body(item);
        }
        else{
            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping("product/delete/{prodId}")
    public ResponseEntity<?> deleteProduct(@PathVariable int prodId){
        if (productService.deleteProduct(prodId)){
            return ResponseEntity.ok().build();
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("product/search")
    public ResponseEntity<List<Product>> searchProduct(@RequestParam String keyword){
        List<Product> result = productService.searchByKeyword(keyword);

        if (result != null){
            return ResponseEntity.ok().body(result);
        }

        else{
            return ResponseEntity.notFound().build();
        }
    }



}
