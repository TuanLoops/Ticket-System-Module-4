package com.ticketsystem.model;


import com.ticketsystem.model.info.Department;
import com.ticketsystem.model.info.Position;
import com.ticketsystem.model.info.Priority;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
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


    public Employee(String name, String email, Position position, Department department, User user, Priority priority) {
        this.name = name;
        this.email = email;
        this.position = position;
        this.department = department;
        this.user = user;
        this.priority = priority;
    }
}
