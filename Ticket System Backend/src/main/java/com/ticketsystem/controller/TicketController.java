package com.ticketsystem.controller;

import com.ticketsystem.model.Employee;
import com.ticketsystem.model.Ticket;
import com.ticketsystem.model.User;
import com.ticketsystem.model.info.Status;
import com.ticketsystem.service.EmployeeService;
import com.ticketsystem.service.TicketService;
import com.ticketsystem.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Optional;

@RestController
@RequestMapping("/users/api/auth/ticket")
@CrossOrigin("*")
@AllArgsConstructor
public class TicketController {
    private TicketService ticketService;
    private UserService userService;
    private EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<Iterable<Ticket>> findAll() {
        return new ResponseEntity<>(ticketService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<Iterable<Ticket>> search(@RequestParam String query) {
        return new ResponseEntity<>(ticketService.findByTitleContainingIgnoreCase(query), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ticket> findById(@PathVariable Long id) {
        Optional<Ticket> ticket = ticketService.findById(id);
        if (ticket.isPresent()) {
            return new ResponseEntity<>(ticket.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Ticket> add(@RequestBody Ticket ticket) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findByUsername(authentication.getName());
        Employee employee = employeeService.findByUser(user);
        Status defaultStatus = new Status();
        defaultStatus.setId(1L);
        ticket.setStatus(defaultStatus);
        ticket.setRequester(employee);
        ticket.setPriority(employee.getPriority());
        ticket.setCreatedAt(LocalDateTime.now().truncatedTo(ChronoUnit.SECONDS));
        ticket.setUpdatedAt(LocalDateTime.now().truncatedTo(ChronoUnit.SECONDS));
        return new ResponseEntity<>(ticketService.save(ticket), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ticket> edit(@PathVariable Long id, @RequestBody Ticket ticket) {
        Optional<Ticket> optionalTicket = ticketService.findById(id);
        if (optionalTicket.isPresent()) {
            ticket.setId(id);
            ticket.setUpdatedAt(LocalDateTime.now().truncatedTo(ChronoUnit.SECONDS));
            return new ResponseEntity<>(ticketService.save(ticket), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/accept/{id}")
    public ResponseEntity<Ticket> acceptTicket(@PathVariable Long id) {
        Ticket ticket = ticketService.findById(id).get();
        Status status = new Status();
        status.setId(2L);
        ticket.setStatus(status);
        User user = userService.findByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
        Employee resolver = employeeService.findByUser(user);
        ticket.setResolver(resolver);
        return new ResponseEntity<>(ticketService.save(ticket), HttpStatus.OK);
    }

    @PutMapping("/resolve/{id}")
    public ResponseEntity<Ticket> resolveTicket(@PathVariable Long id) {
        Ticket ticket = ticketService.findById(id).get();
        Status status = new Status();
        status.setId(3L);
        ticket.setStatus(status);
        return new ResponseEntity<>(ticketService.save(ticket), HttpStatus.OK);
    }

    @PutMapping("/reopen/{id}")
    public ResponseEntity<Ticket> reopenTicket(@PathVariable Long id) {
        Ticket ticket = ticketService.findById(id).get();
        if (ticket.getStatus().getId() == 3L){
            Status status = new Status();
            status.setId(2L);
            ticket.setStatus(status);
            return new ResponseEntity<>(ticketService.save(ticket), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/close/{id}")
    public ResponseEntity<Ticket> closeTicket(@PathVariable Long id) {
        Ticket ticket = ticketService.findById(id).get();
        Status status = new Status();
        status.setId(4L);
        ticket.setStatus(status);
        return new ResponseEntity<>(ticketService.save(ticket), HttpStatus.OK);
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
