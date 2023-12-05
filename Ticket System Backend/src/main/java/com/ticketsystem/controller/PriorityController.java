package com.ticketsystem.controller;

import com.ticketsystem.model.Priority;
import com.ticketsystem.service.PriorityService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/priority")
@CrossOrigin("*")
public class PriorityController {
    private PriorityService<Priority> priorityService;
    @GetMapping("")
    public ResponseEntity<List<Priority>> getAll() {
        List<Priority> priorities = (List<Priority>) priorityService.findAll();
        if (priorities.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(priorities, HttpStatus.OK);
    }
    @GetMapping("{id}")
    public ResponseEntity<Priority> getOneStudent(@PathVariable Long id){
        Priority priority = priorityService.findById(id);
        return new ResponseEntity<>(priority, HttpStatus.OK);
    }


    @PostMapping("")
    public ResponseEntity<Priority> add(@RequestBody Priority priority) {
        priorityService.save(priority);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<Priority> delete(@PathVariable Long id) {
        priorityService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<Priority> add(@PathVariable Long id, @RequestBody Priority priority) {
        priority.setId(id);
        priorityService.save(priority);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Priority>> getByName(@RequestParam String name) {
        List<Priority> priorities = priorityService.findByNameContain(name);
        if (priorities.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(priorities, HttpStatus.OK);
    }

}

