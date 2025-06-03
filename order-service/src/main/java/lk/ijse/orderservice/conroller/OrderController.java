package lk.ijse.orderservice.conroller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {
    @GetMapping("/all")
    public String getOrders(){
        return "order 1 , order 2 , order 3";
    }
}
