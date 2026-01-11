package salma.net.orderservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import salma.net.orderservice.entities.ProductItem;

public interface ProductItemRepository extends JpaRepository<ProductItem, Long> {
}
