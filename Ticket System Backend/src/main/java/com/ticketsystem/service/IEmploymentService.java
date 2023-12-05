package com.ticketsystem.service;

import com.ticketsystem.model.info.Employment;

import java.util.List;

public interface IEmploymentService extends IGenericService<Employment>{
    List<Employment> findByNameContain(String name);
}
