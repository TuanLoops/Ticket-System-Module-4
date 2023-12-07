package com.ticketsystem.service;

import com.ticketsystem.model.category.LargeCategory;
import com.ticketsystem.model.dto.LCDto;

public interface ILargeCategoryService extends IGenericService<LargeCategory>{
    Iterable<LCDto> findAllDto();
}
