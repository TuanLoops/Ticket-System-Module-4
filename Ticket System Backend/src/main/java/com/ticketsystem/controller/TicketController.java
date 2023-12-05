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
import java.util.Optional;

@RestController
@RequestMapping("/hello/api/auth/ticket")
@AllArgsConstructor
public class TicketController {
    private TicketService ticketService;

    @GetMapping
    public ResponseEntity<Iterable<Ticket>> findAll() {
        return new ResponseEntity<>(ticketService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<Iterable<Ticket>> search(@RequestParam String query) {
        return new ResponseEntity<>(ticketService.findByTitleContainingIgnoreCaseOrIdContaining(query), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Ticket> add(@RequestBody Ticket ticket) {
        Status defaultStatus = new Status();
        defaultStatus.setId(1L);
        ticket.setStatus(defaultStatus);
        ticket.setCreatedAt(LocalDateTime.now());
        ticket.setUpdatedAt(LocalDateTime.now());
        return new ResponseEntity<>(ticketService.save(ticket), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ticket> edit(@PathVariable Long id, @RequestBody Ticket ticket) {
        Optional<Ticket> optionalTicket = ticketService.findById(id);
        if (optionalTicket.isPresent()) {
            ticket.setId(id);
            ticket.setUpdatedAt(LocalDateTime.now());
            return new ResponseEntity<>(ticketService.save(ticket), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
        Optional<Ticket> optionalTicket = ticketService.findById(id);
        if (optionalTicket.isPresent()) {
            ticketService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
