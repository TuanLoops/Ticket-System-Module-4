package com.ticketsystem.service;

import com.ticketsystem.model.Priority;

import java.util.List;

public interface IGenericService<T>{
    Iterable<T> findAll();
    Priority findById(Long id);
    T save(T t);
    void delete(Long id);
    List<T> findByNameContain(String name);
}
