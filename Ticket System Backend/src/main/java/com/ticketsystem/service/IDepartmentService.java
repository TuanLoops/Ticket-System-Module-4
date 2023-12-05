package com.ticketsystem.service;

import com.ticketsystem.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IDepartmentService extends IGenericService<Department> {
    List<Department> findByNameContain(String name);
}
