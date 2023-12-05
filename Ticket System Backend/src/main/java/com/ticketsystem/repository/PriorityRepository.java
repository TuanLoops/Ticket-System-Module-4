package com.ticketsystem.repository;

import com.ticketsystem.model.Priority;
import org.hibernate.type.descriptor.converter.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PriorityRepository extends JpaRepository<Priority ,Long> {
}
