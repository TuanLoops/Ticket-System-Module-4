package com.ticketsystem.controller;

import com.ticketsystem.model.Ticket;
import com.ticketsystem.model.info.Status;
import com.ticketsystem.service.TicketService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.ZoneId;

@RestController
@RequestMapping("/hello/api/auth/ticket")
@AllArgsConstructor
public class TicketController {
    private TicketService ticketService;

    @GetMapping
    public ResponseEntity<Iterable<Ticket>> findAll() {
        return new ResponseEntity<>(ticketService.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Ticket> add(@RequestBody Ticket ticket) {
        ticket.setCreatedAt(LocalDateTime.now());
        Status defaultStatus = new Status();
        defaultStatus.setId(1L);
        ticket.setStatus(defaultStatus);
        return new ResponseEntity<>(ticketService.save(ticket), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ticket> edit(@PathVariable Long id, @RequestBody Ticket ticket) {
        ticket.setId(id);
        ticket.setUpdatedAt(LocalDateTime.now());
        return new ResponseEntity<>(ticketService.save(ticket), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
        ticketService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/category")
    public ResponseEntity<Iterable<Ticket>> findAllBySmallCategoryId(@RequestParam Long smallCategoryId) {
        return new ResponseEntity<>(ticketService.findAllBySmallCategoryId(smallCategoryId), HttpStatus.OK);
    }
}
