package com.ticketsystem.service.impl;

import com.ticketsystem.model.info.Priority;
import com.ticketsystem.repository.PriorityRepository;
import com.ticketsystem.service.PriorityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PriorityServiceImpl implements PriorityService {

    private final PriorityRepository priorityRepository;

    @Autowired
    public PriorityServiceImpl(PriorityRepository priorityRepository) {
        this.priorityRepository = priorityRepository;
    }

    @Override
    public Iterable<Priority> findAll() {
        return priorityRepository.findAll();
    }

    @Override
    public Optional<Priority> findById(Long id) {
        return priorityRepository.findById(id);
    }

    @Override
    public Priority save(Priority priority) {
        return priorityRepository.save(priority);
    }

    @Override
    public void delete(Long id) {
        priorityRepository.deleteById(id);
    }

    @Override
    public Iterable<Priority> findByNameContaining(String name) {
        return priorityRepository.findByNameContaining(name);
    }
}
