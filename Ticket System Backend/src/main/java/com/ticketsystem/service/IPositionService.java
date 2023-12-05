package com.ticketsystem.service;

import com.ticketsystem.model.Department;
import com.ticketsystem.model.info.Position;

import java.util.List;

public interface IPositionService extends IGenericService<Position>{
    List<Position> findByNameContain(String name);
}
