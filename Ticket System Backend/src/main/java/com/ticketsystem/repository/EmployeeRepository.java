package com.ticketsystem.repository;

import com.ticketsystem.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Iterable<Employee> findAllByNameContaining (String name);

    Optional<Employee> findByEmail(String email);

}
