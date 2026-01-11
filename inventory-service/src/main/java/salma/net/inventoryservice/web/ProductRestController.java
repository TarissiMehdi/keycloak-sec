package salma.net.inventoryservice.web;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import salma.net.inventoryservice.entities.Product;
import salma.net.inventoryservice.repository.ProductRepository;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor

public class ProductRestController {
    private final ProductRepository productRepository;


    @GetMapping("/products")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<Product> products() {
        return productRepository.findAll();
    }

    @GetMapping("/products/{id}")
    @PreAuthorize("hasAuthority('USER')")
    public Product productById(@PathVariable String id) {
        return productRepository.findById(id).get();
    }


    @GetMapping("/auth")
    public Authentication authentication(Authentication authentication) {
return authentication;
    }
}
