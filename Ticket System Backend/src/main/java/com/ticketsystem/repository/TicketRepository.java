package com.ticketsystem.repository;

import com.ticketsystem.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {
    Iterable<Ticket> findAllBySmallCategoryId(Long id);
    Iterable<Ticket> findAllByMediumCategoryId(Long id);
    Iterable<Ticket> findAllByLargeCategoryId(Long id);
    Iterable<Ticket> findByTitleContainingIgnoreCase(String query);
    Iterable<Ticket> findAllByStatusId(Long id);
    Iterable<Ticket> findAllByRequesterId(Long id);
    Iterable<Ticket> findAllByResolverId(Long id);
}
