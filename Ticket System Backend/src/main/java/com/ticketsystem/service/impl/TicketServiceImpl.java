package com.ticketsystem.service.impl;

import com.ticketsystem.model.Ticket;
import com.ticketsystem.repository.TicketRepository;
import com.ticketsystem.service.TicketService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class TicketServiceImpl implements TicketService {
    private TicketRepository ticketRepository;

    @Override
    public Iterable<Ticket> findAll() {
        return ticketRepository.findAll();
    }

    @Override
    public Optional<Ticket> findById(Long id) {
        return ticketRepository.findById(id);
    }

    @Override
    public Ticket save(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    @Override
    public void delete(Long id) {
        ticketRepository.deleteById(id);
    }

    @Override
    public Iterable<Ticket> findAllBySmallCategoryId(Long smallCategoryId) {
        return ticketRepository.findAllBySmallCategoryId(smallCategoryId);
    }
}
