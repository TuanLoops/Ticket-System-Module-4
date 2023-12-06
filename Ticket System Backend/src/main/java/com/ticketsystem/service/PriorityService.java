package com.ticketsystem.service;

import com.ticketsystem.model.info.Priority;

import java.util.List;

public interface PriorityService extends IGenericService<Priority> {
    Iterable<Priority> findByNameContaining (String name);
}
