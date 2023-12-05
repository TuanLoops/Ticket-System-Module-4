package com.ticketsystem.service;

import com.ticketsystem.model.Ticket;

public interface TicketService extends IGenericService<Ticket> {
    Iterable<Ticket> findAllBySmallCategoryId(Long smallCategoryId);
    Iterable<Ticket> findAllByMediumCategoryId(Long id);
    Iterable<Ticket> findAllByLargeCategoryId(Long id);
    Iterable<Ticket> findByTitleContainingIgnoreCaseOrIdContaining(String query);
    Iterable<Ticket> findAllByStatusId(Long id);
    Iterable<Ticket> findAllByRequesterId(Long id);
    Iterable<Ticket> findAllByResolverId(Long id);
}
