package com.ticketsystem.service.impl;

import com.ticketsystem.model.info.Position;
import com.ticketsystem.repository.IPositionRepository;
import com.ticketsystem.service.IPositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PositionService implements IPositionService {
    @Autowired
    private IPositionRepository iPositionRepository;

    @Override
    public Iterable<Position> findAll() {
        return iPositionRepository.findAll();
    }

    @Override
    public Optional<Position> findById(Long id) {
        return iPositionRepository.findById(id);
    }

    @Override
    public Position save(Position position) {
        return iPositionRepository.save(position);
    }

    @Override
    public void delete(Long id) {
        iPositionRepository.deleteById(id);

    }

    @Override
    public List<Position> findByNameContain(String name) {
        return iPositionRepository.findByNameContainsIgnoreCase(name);
    }
}
