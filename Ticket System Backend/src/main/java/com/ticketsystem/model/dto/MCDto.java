package com.ticketsystem.model.dto;

import com.ticketsystem.model.info.Department;
import jakarta.persistence.ManyToOne;
import lombok.Data;

import java.util.List;

@Data
public class MCDto {
    private Long id;
    private String name;
    private List<SCDto> scDtoList;

    public MCDto(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
