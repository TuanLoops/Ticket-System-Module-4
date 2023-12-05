package com.ticketsystem.repository;

import com.ticketsystem.model.Ticket;
import com.ticketsystem.model.category.SmallCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {
    Iterable<Ticket> findAllBySmallCategoryId(Long smallCategoryId);
}
