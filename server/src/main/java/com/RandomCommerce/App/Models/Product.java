package com.RandomCommerce.App.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Product {

    @Id
    private int id;
    private long price;
    private String name;
    private String description;
    private String  category;
    private Date releaseDate;
    private Boolean availability;
    private int quantity;
}
