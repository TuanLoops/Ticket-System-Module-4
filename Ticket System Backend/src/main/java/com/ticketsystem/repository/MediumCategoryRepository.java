package com.ticketsystem.repository;

import com.ticketsystem.model.category.MediumCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MediumCategoryRepository extends JpaRepository<MediumCategory,Long> {
    List<MediumCategory> findAllByLargeCategoryId(Long id);
}
