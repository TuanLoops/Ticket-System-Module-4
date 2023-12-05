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
@RequestMapping("/employments")
@CrossOrigin("*")
public class EmploymentController {
    @Autowired
    private IEmploymentService employmentService;
    @GetMapping("")
    public ResponseEntity<Iterable<Employment>> findAllPosition(){
        List<Employment> employmentList = (List<Employment>) employmentService.findAll();
        if (employmentList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(employmentList,HttpStatus.OK);
        }
    }

    @PostMapping("")
    public ResponseEntity<Employment> add(@RequestBody Employment employment){
        employmentService.save(employment);
        return new ResponseEntity<>(employment,HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Employment> delete(@PathVariable Long id){
        Optional<Employment> positionOptional = employmentService.findById(id);
        if (positionOptional.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            employmentService.delete(id);
            return new ResponseEntity<>(positionOptional.get(),HttpStatus.OK);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employment> update(@PathVariable Long id, @RequestBody Employment employment){
        Optional<Employment> positionOptional = employmentService.findById(id);
        if (positionOptional.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            employment.setId(positionOptional.get().getId());
            return new ResponseEntity<>(employmentService.save(employment),HttpStatus.OK);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<Employment>findPositionById(@PathVariable Long id){
        return new ResponseEntity<>(employmentService.findById(id).get(),HttpStatus.OK) ;
    }

    @GetMapping("/search")
    public ResponseEntity<List<Employment>> getByName(@RequestParam String name) {
        System.out.println(name);
        List<Employment> employmentList = employmentService.findByNameContain(name);
        System.out.println(employmentList);
        if (employmentList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(employmentList, HttpStatus.OK);
    }




}
