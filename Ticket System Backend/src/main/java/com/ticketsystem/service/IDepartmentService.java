package com.ticketsystem.service;

import com.ticketsystem.model.info.Department;

import java.util.List;

public interface IDepartmentService extends IGenericService<Department> {
    List<Department> findByNameContain(String name);
}
