package com.ticketsystem.service.impl;

import com.ticketsystem.model.category.LargeCategory;
import com.ticketsystem.model.dto.Converter;
import com.ticketsystem.model.dto.LCDto;
import com.ticketsystem.model.dto.MCDto;
import com.ticketsystem.model.dto.SCDto;
import com.ticketsystem.repository.LargeCategoryRepository;
import com.ticketsystem.repository.MediumCategoryRepository;
import com.ticketsystem.repository.SmallCategoryRepository;
import com.ticketsystem.service.ILargeCategoryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class LargeCategoryServiceImpl implements ILargeCategoryService {
    LargeCategoryRepository largeCategoryRepository;
    MediumCategoryRepository mediumCategoryRepository;
    SmallCategoryRepository smallCategoryRepository;
    @Override
    public Iterable<LargeCategory> findAll() {
        return largeCategoryRepository.findAll();
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

    public Iterable<LCDto> findAllDto() {
        List<LargeCategory> largeCategoryList = largeCategoryRepository.findAll();
        List<LCDto> lcDtoList = Converter.largeCategoryDtoConvert(largeCategoryList);
        for (LCDto lcDto: lcDtoList) {
            List<MCDto> mcDtoList = Converter.mediumCategoryConvert(mediumCategoryRepository.findAllByLargeCategoryId(lcDto.getId()));
            for (MCDto mcDto: mcDtoList) {
                List<SCDto> scDtoList = Converter.smallCategoryConvert(smallCategoryRepository.findAllByMediumCategoryId(mcDto.getId()));
                mcDto.setScDtoList(scDtoList);
            }
            lcDto.setMcDtoList(mcDtoList);
        }
        return lcDtoList;
    }
}
