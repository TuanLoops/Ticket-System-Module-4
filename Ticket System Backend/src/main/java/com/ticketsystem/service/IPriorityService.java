package com.ticketsystem.service;

import java.util.List;
import java.util.Optional;

public interface IPriorityService<T> {
    Iterable<T> findAll();
    T findById(Long id);
    T save(T t);
    void delete(Long id);
    List<T> findByNameContain(String name);
    Optional<T> findOneById(Long id);
}
