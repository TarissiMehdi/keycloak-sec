package salma.net.inventoryservice;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import salma.net.inventoryservice.entities.Product;
import salma.net.inventoryservice.repository.ProductRepository;

import java.util.UUID;

@SpringBootApplication
public class InventoryServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(InventoryServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(ProductRepository productRepository) {
        return args -> {
            productRepository.save(Product.builder()
                    .id("P01")
                    .name("Product 1")
                            .price(100.00)
                    .quantity(100)
                    .build());
            productRepository.save(Product.builder()
                    .id("P02")
                    .name("Product 2")
                    .price(100.00)
                    .quantity(100)
                    .build());
            productRepository.save(Product.builder()
                    .id("P03")
                    .name("Product 3")
                    .price(100.00)
                    .quantity(100)
                    .build());
        };
    }

}
