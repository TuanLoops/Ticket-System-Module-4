package com.ticketsystem.controller;


import com.ticketsystem.model.category.LargeCategory;
import com.ticketsystem.service.impl.LargeCategoryServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/hello/api/auth/largecategory")
@AllArgsConstructor
public class LargeCategoryController {

    private LargeCategoryServiceImpl largeCategoryService;


    @GetMapping
    public ResponseEntity<Iterable<LargeCategory>> findAll () {
        return new ResponseEntity<>(largeCategoryService.findAll(), HttpStatus.OK);
    }


}
