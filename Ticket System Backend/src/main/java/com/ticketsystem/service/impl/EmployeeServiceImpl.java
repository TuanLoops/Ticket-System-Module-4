package com.ticketsystem.service.impl;

import com.ticketsystem.model.Employee;
import com.ticketsystem.model.User;
import com.ticketsystem.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeServiceImpl implements com.ticketsystem.service.EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Iterable<Employee> findAll() {
        return null;
    }

    @Override
    public Optional<Employee> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public Employee save(Employee employee) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public Iterable<Employee> findAllByNameContaining(String name) {
        return employeeRepository.findAllByNameContaining(name);
    }

    @Override
    public Optional<Employee> findByEmail(String email) {
        return employeeRepository.findByEmail(email);
    }

    @Override
    public void createEmployeeByUser(User user) {
        Employee employee = new Employee();
        employee.setUser(user);
        employeeRepository.save(employee);
    }
}
