package salma.net.orderservice.web;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import salma.net.orderservice.entities.Order;
import salma.net.orderservice.repository.OrderRepository;
import salma.net.orderservice.restclients.InventoryRestClient;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class OrdersRestControllers {
    private final OrderRepository orderRepository;
    private final InventoryRestClient inventoryRestClient;



    @GetMapping("/orders")
    public List<Order> findAllOrders(){
        List<Order> allOrders = orderRepository.findAll();
        allOrders.forEach(o->{
            o.getProductItems().forEach(pi->{
                pi.setProduct(inventoryRestClient.findProductById(pi.getProductId()));
            });
        });
        return allOrders;
    }
    @GetMapping("/orders/{id}")
    public Order findOrderById(@PathVariable String id){
        Order order = orderRepository.findById(id).get();
        order.getProductItems().forEach(pi->{
            pi.setProduct(inventoryRestClient.findProductById(pi.getProductId()));
        });
        return order;
    }
}