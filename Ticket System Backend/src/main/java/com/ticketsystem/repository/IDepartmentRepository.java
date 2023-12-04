package com.ticketsystem.repository;

import com.ticketsystem.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IDepartmentRepository extends JpaRepository<Department,Long> {
    List<Department> findByNameContainsIgnoreCase(String name);
}
