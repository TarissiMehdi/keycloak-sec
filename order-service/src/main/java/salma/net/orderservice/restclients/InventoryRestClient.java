package salma.net.orderservice.restclients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import salma.net.orderservice.model.Product;

import java.util.List;
@FeignClient(url = "http://localhost:8083",name = "inventory-service")
public interface InventoryRestClient {
    @GetMapping("/api/products")
    List<Product> getAllProducts();
    @GetMapping("/api/products/{id}")
   Product findProductById(@PathVariable String id);}


