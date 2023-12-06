package com.ticketsystem.controller;


import com.ticketsystem.model.Employee;
import com.ticketsystem.model.User;
import com.ticketsystem.service.impl.EmployeeServiceImpl;
import com.ticketsystem.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/hello/api/auth/employee")
public class EmployeeController {

    private final UserServiceImpl userService;
    private final EmployeeServiceImpl employeeService;


    @Autowired
    public EmployeeController(UserServiceImpl userService, EmployeeServiceImpl employeeService) {
        this.userService = userService;
        this.employeeService = employeeService;
    }

    @GetMapping
    public ResponseEntity<Iterable<Employee>> findAll() {
        return new ResponseEntity<>(employeeService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<Iterable<Employee>> search(@RequestParam String name) {
        return new ResponseEntity<>(employeeService.findAllByNameContaining(name), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Employee employee) {
        employeeService.save(employee);
        return new ResponseEntity<>(HttpStatus.OK);
    }




}
