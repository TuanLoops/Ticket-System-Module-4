package com.ticketsystem.controller;

import com.ticketsystem.model.info.Employment;
import com.ticketsystem.service.IEmploymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/positions")
@CrossOrigin("*")
public class EmploymentController {
    @Autowired
    private IEmploymentService positionService;
    @GetMapping("")
    public ResponseEntity<Iterable<Employment>> findAllPosition(){
        List<Employment> employmentList = (List<Employment>) positionService.findAll();
        if (employmentList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(employmentList,HttpStatus.OK);
        }
    }

    @PostMapping("")
    public ResponseEntity<Employment> add(@RequestBody Employment employment){
        positionService.save(employment);
        return new ResponseEntity<>(employment,HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Employment> delete(@PathVariable Long id){
        Optional<Employment> positionOptional = positionService.findById(id);
        if (!positionOptional.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            positionService.delete(id);
            return new ResponseEntity<>(positionOptional.get(),HttpStatus.OK);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employment> update(@PathVariable Long id, @RequestBody Employment employment){
        Optional<Employment> positionOptional = positionService.findById(id);
        if (!positionOptional.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            employment.setId(positionOptional.get().getId());
            return new ResponseEntity<>(positionService.save(employment),HttpStatus.OK);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<Employment>findPositionById(@PathVariable Long id){
        return new ResponseEntity<>(positionService.findById(id).get(),HttpStatus.OK) ;
    }

    @GetMapping("/search")
    public ResponseEntity<List<Employment>> getByName(@RequestParam String name) {
        System.out.println(name);
        List<Employment> employmentList = (List<Employment>) positionService.findByNameContain(name);
        System.out.println(employmentList);
        if (employmentList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(employmentList, HttpStatus.OK);
    }




}
