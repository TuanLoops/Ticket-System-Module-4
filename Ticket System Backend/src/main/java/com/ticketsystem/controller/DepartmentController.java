package com.ticketsystem.controller;

import com.ticketsystem.model.Department;
import com.ticketsystem.service.IDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/departments")
@CrossOrigin("*")
public class DepartmentController {
@Autowired
    private IDepartmentService departmentService;
    @GetMapping("")
    public ResponseEntity<Iterable<Department>> findAllDepartment(){
        List<Department> departmentList = (List<Department>) departmentService.findAll();
        if (departmentList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(departmentList,HttpStatus.OK);
        }
    }

    @PostMapping("")
    public ResponseEntity<Department> add(@RequestBody Department department){
        departmentService.save(department);
        return new ResponseEntity<>(department,HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Department> delete(@PathVariable Long id){
        Optional<Department> departmentOptional = departmentService.findById(id);
        if (!departmentOptional.isPresent()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            departmentService.delete(id);
            return new ResponseEntity<>(departmentOptional.get(),HttpStatus.OK);
        }
    }






}
