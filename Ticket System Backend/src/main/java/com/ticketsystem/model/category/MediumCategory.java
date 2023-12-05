package com.ticketsystem.model.category;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class MediumCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @ManyToOne
    private LargeCategory largeCategory;
}
