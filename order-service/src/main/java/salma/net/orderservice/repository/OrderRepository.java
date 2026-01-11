package salma.net.orderservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import salma.net.orderservice.entities.Order;

public interface OrderRepository extends JpaRepository<Order, String> {
}
