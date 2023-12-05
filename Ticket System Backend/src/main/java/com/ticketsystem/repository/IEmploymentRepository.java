package com.ticketsystem.repository;

import com.ticketsystem.model.info.Employment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IEmploymentRepository extends JpaRepository<Employment,Long> {
    List<Employment> findByNameContainsIgnoreCase(String name);
}
