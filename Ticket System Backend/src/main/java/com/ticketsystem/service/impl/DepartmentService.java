package com.ticketsystem.service.impl;

import com.ticketsystem.model.Department;
import com.ticketsystem.repository.IDepartmentRepository;
import com.ticketsystem.service.IDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class DepartmentService implements IDepartmentService {
    @Autowired
    private IDepartmentRepository iDepartmentRepository;
    @Override
    public Iterable<Department> findAll() {
        return iDepartmentRepository.findAll();
    }

    @Override
    public Optional<Department> findById(Long id) {
        return iDepartmentRepository.findById(id);
    }

    @Override
    public Department save(Department department) {
        return iDepartmentRepository.save(department);
    }

    @Override
    public void delete(Long id) {
        iDepartmentRepository.deleteById(id);
    }

    @Override
    public List<Department> findByNameContain(String name) {
        return iDepartmentRepository.findByNameContainsIgnoreCase(name);
    }
}
