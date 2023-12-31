package com.ticketsystem.model.category;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.ticketsystem.model.info.Department;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Entity
@Data
public class LargeCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @ManyToOne
    private Department receivingDepartment;
}
