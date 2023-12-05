package com.ticketsystem.service;

import com.ticketsystem.model.Priority;

import java.util.List;
import java.util.Optional;

public interface IGenericService<T>{
    Iterable<T> findAll();
    Optional<T> findById(Long id);
    T save(T t);
    void delete(Long id);
}
