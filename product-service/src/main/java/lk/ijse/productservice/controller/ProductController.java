package lk.ijse.productservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/products")

public class ProductController {
    @GetMapping("/all")
    public String getProducts(){
        return "product 1 , product 2 , product 3";
    }
}
