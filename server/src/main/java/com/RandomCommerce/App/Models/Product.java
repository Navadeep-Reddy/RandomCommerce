package com.RandomCommerce.App.Models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Product {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;
    private long price;
    private String name;
    private String description;
    private String  category;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern =  "dd-mm-yyyy")
    private Date releaseDate;
    private Boolean availability;
    private int quantity;

    private String imageName;
    private String imageType;

    @Lob
    private byte[] imageData;
}
