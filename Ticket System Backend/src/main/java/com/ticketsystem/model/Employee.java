package com.ticketsystem.model;


import com.ticketsystem.model.info.Department;
import com.ticketsystem.model.info.Employment;
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
    private Employment employment;

    @ManyToOne
    private Department department;

    @OneToOne
    private User user;

    @ManyToOne
    private Priority priority;


    public Employee(String name, String email, Employment employment, Department department, User user, Priority priority) {
        this.name = name;
        this.email = email;
        this.employment = employment;
        this.department = department;
        this.user = user;
        this.priority = priority;
    }
}
