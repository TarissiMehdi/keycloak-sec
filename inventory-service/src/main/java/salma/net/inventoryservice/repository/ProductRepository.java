package salma.net.inventoryservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import salma.net.inventoryservice.entities.Product;

public interface ProductRepository extends JpaRepository<Product, String> {
}
