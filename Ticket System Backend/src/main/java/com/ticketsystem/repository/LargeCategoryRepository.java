package com.ticketsystem.repository;

import com.ticketsystem.model.category.LargeCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LargeCategoryRepository extends JpaRepository<LargeCategory, Long> {
}
