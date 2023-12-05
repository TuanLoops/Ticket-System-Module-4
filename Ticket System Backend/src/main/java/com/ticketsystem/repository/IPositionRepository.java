package com.ticketsystem.repository;

import com.ticketsystem.model.Department;
import com.ticketsystem.model.info.Position;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IPositionRepository extends JpaRepository<Position,Long> {
    List<Position> findByNameContainsIgnoreCase(String name);
}
