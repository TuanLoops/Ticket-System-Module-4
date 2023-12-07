package com.ticketsystem.model.dto;

import com.ticketsystem.model.info.Department;
import jakarta.persistence.ManyToOne;
import lombok.Data;

import java.util.List;

@Data
public class LCDto {
    private Long id;
    private String name;
    private Department receivingDepartment;
    private List<MCDto> mcDtoList;

    public LCDto(Long id, String name, Department receivingDepartment) {
        this.id = id;
        this.name = name;
        this.receivingDepartment = receivingDepartment;
    }
}
