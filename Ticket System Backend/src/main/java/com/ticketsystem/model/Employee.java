package com.ticketsystem.model;


import com.ticketsystem.model.info.Department;
import com.ticketsystem.model.info.Position;
import com.ticketsystem.model.info.Priority;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;

    @ManyToOne
    private Position position;

    @ManyToOne
    private Department department;

    @ManyToOne
    private User user;

    @ManyToOne
    private Priority priority;


}
