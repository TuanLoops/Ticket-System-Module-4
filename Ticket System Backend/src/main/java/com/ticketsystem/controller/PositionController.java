package com.ticketsystem.controller;

import com.ticketsystem.model.Department;
import com.ticketsystem.model.info.Position;
import com.ticketsystem.service.IPositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/positions")
@CrossOrigin("*")
public class PositionController {
    @Autowired
    private IPositionService positionService;
    @GetMapping("")
    public ResponseEntity<Iterable<Position>> findAllPosition(){
        List<Position> positionList = (List<Position>) positionService.findAll();
        if (positionList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(positionList,HttpStatus.OK);
        }
    }

    @PostMapping("")
    public ResponseEntity<Position> add(@RequestBody Position position){
        positionService.save(position);
        return new ResponseEntity<>(position,HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Position> delete(@PathVariable Long id){
        Optional<Position> positionOptional = positionService.findById(id);
        if (!positionOptional.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            positionService.delete(id);
            return new ResponseEntity<>(positionOptional.get(),HttpStatus.OK);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Position> update(@PathVariable Long id,@RequestBody Position position){
        Optional<Position> positionOptional = positionService.findById(id);
        if (!positionOptional.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            position.setId(positionOptional.get().getId());
            return new ResponseEntity<>(positionService.save(position),HttpStatus.OK);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<Position>findPositionById(@PathVariable Long id){
        return new ResponseEntity<>(positionService.findById(id).get(),HttpStatus.OK) ;
    }

    @GetMapping("/search")
    public ResponseEntity<List<Position>> getByName(@RequestParam String name) {
        System.out.println(name);
        List<Position> positionList = (List<Position>) positionService.findByNameContain(name);
        System.out.println(positionList);
        if (positionList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(positionList, HttpStatus.OK);
    }




}
