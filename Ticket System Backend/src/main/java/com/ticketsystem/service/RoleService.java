package com.ticketsystem.service;


import com.ticketsystem.model.Role;


public interface RoleService {
    Iterable<Role> findAll();

    void save(Role role);

    Role findByName(String name);
}
