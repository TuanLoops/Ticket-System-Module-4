package com.ticketsystem.model;


import com.ticketsystem.model.info.Priority;
import com.ticketsystem.model.category.LargeCategory;
import com.ticketsystem.model.category.MediumCategory;
import com.ticketsystem.model.category.SmallCategory;
import com.ticketsystem.model.info.Status;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

    @OneToOne
    private SmallCategory smallCategory;

    @OneToOne
    private MediumCategory mediumCategory;

    @OneToOne
    private LargeCategory largeCategory;

    public Ticket(String title, LocalDateTime createdAt, LocalDateTime updatedAt, Employee requester, Employee resolver, Status status, Priority priority, SmallCategory smallCategory, MediumCategory mediumCategory, LargeCategory largeCategory) {
        this.title = title;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.requester = requester;
        this.resolver = resolver;
        this.status = status;
        this.priority = priority;
        this.smallCategory = smallCategory;
        this.mediumCategory = mediumCategory;
        this.largeCategory = largeCategory;
    }
}