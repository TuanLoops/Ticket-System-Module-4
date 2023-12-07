package com.ticketsystem.repository;

import com.ticketsystem.model.category.MediumCategory;
import com.ticketsystem.model.category.SmallCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SmallCategoryRepository extends JpaRepository<SmallCategory,Long> {
    List<SmallCategory> findAllByMediumCategoryId(Long id);
}
