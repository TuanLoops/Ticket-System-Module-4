package com.ticketsystem.repository;

import com.ticketsystem.model.Priority;
import com.ticketsystem.model.info.Employment;
import org.hibernate.type.descriptor.converter.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PriorityRepository extends JpaRepository<Priority ,Long> {
    List<Priority> findByNameContainsIgnoreCase(String name);
}
