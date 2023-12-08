package com.ticketsystem.service;

import com.ticketsystem.model.Employee;
import com.ticketsystem.model.User;

import java.util.Optional;

public interface EmployeeService extends IGenericService<Employee> {
    Iterable<Employee> findAllByNameContaining (String name);

    Optional<Employee> findByEmail(String email);
    void createEmployeeByUser(User user);

    Employee findByUser(User user);
}
