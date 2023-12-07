package com.ticketsystem.service.impl;

import com.ticketsystem.model.category.LargeCategory;
import com.ticketsystem.service.ILargeCategoryService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LargeCategoryServiceImpl implements ILargeCategoryService {
    @Override
    public Iterable<LargeCategory> findAll() {
        return null;
    }

    @Override
    public Optional<LargeCategory> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public LargeCategory save(LargeCategory largeCategory) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
