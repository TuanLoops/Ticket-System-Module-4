package com.ticketsystem.service;

import com.ticketsystem.model.Ticket;

public interface TicketService extends IGenericService<Ticket> {
    Iterable<Ticket> findAllBySmallCategoryId(Long smallCategoryId);
}
