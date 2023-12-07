package com.ticketsystem.service;

import com.ticketsystem.model.dto.LCDto;

import java.util.Optional;

public interface IGenericService<T>{
    Iterable<T> findAll();
    Optional<T> findById(Long id);
    T save(T t);
    void delete(Long id);


}
