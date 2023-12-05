package com.ticketsystem.repository;

import com.ticketsystem.model.info.Priority;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PriorityRepository extends JpaRepository<Priority ,Long> {
}
