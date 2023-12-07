package com.ticketsystem.model.dto;

import com.ticketsystem.model.category.LargeCategory;
import com.ticketsystem.model.category.MediumCategory;
import com.ticketsystem.model.category.SmallCategory;

import java.util.ArrayList;
import java.util.List;

public class Converter {

    public static List<LCDto> largeCategoryDtoConvert(List<LargeCategory> largeCategoryList) {
        List<LCDto> lcDtoList = new ArrayList<>();
        for (LargeCategory lc: largeCategoryList) {
            lcDtoList.add(new LCDto(lc.getId(), lc.getName(), lc.getReceivingDepartment()));
        }
        return lcDtoList;
    }

    public static List<MCDto> mediumCategoryConvert(List<MediumCategory> mediumCategoryList) {
        List<MCDto> mcDtoList = new ArrayList<>();
        for (MediumCategory mc: mediumCategoryList) {
            mcDtoList.add(new MCDto(mc.getId(), mc.getName()));
        }
        return mcDtoList;
    }

    public static List<SCDto> smallCategoryConvert(List<SmallCategory> smallCategoryList) {
        List<SCDto> scDtoList = new ArrayList<>();
        for (SmallCategory mc: smallCategoryList) {
            scDtoList.add(new SCDto(mc.getId(), mc.getName()));
        }
        return scDtoList;
    }
}
