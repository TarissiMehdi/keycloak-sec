package salma.net.orderservice.model;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@ToString
public class Product {
    private String id;
    private String name;
    private double price;
    private int quantity;
}
