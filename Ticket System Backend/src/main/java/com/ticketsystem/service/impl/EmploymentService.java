package com.ticketsystem.service.impl;

import com.ticketsystem.model.info.Employment;
import com.ticketsystem.repository.IEmploymentRepository;
import com.ticketsystem.service.IEmploymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmploymentService implements IEmploymentService {
    @Autowired
    private IEmploymentRepository iEmploymentRepository;

    @Override
    public Iterable<Employment> findAll() {
        return iEmploymentRepository.findAll();
    }

    @Override
    public Optional<Employment> findById(Long id) {
        return iEmploymentRepository.findById(id);
    }

    @Override
    public Employment save(Employment employment) {
        return iEmploymentRepository.save(employment);
    }

    @Override
    public void delete(Long id) {
        iEmploymentRepository.deleteById(id);

    }

    @Override
    public List<Employment> findByNameContain(String name) {
        return iEmploymentRepository.findByNameContainsIgnoreCase(name);
    }
}
