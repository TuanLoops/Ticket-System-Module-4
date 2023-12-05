package com.ticketsystem.service;

import java.util.List;

public interface PriorityService<T> {
    Iterable<T> findAll();
    T findById(Long id);
    T save(T t);
    void delete(Long id);
    List<T> findByNameContain(String name);
}
