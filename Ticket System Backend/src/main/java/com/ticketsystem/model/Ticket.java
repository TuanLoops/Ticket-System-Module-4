package com.ticketsystem.model;


import com.ticketsystem.model.info.Priority;
import com.ticketsystem.model.info.Status;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    @ManyToOne
    private Employee requester;

    @ManyToOne
    private Employee resolver;

    @OneToOne
    private Status status;

    @OneToOne
    private Priority priority;

    public Ticket(String title, LocalDateTime createdAt, LocalDateTime updatedAt, Employee requester, Employee resolver, Status status, Priority priority) {
        this.title = title;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.requester = requester;
        this.resolver = resolver;
        this.status = status;
        this.priority = priority;
    }
}