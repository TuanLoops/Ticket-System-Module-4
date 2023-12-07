package com.ticketsystem.controller;


import com.ticketsystem.model.category.LargeCategory;
import com.ticketsystem.model.dto.LCDto;
import com.ticketsystem.service.ILargeCategoryService;
import com.ticketsystem.service.impl.LargeCategoryServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/hello/ctg")
@CrossOrigin("*")
@AllArgsConstructor
public class LargeCategoryController {

    private ILargeCategoryService largeCategoryService;


    @GetMapping
    public ResponseEntity<Iterable<LargeCategory>> findAll () {
        return new ResponseEntity<>(largeCategoryService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/dto")
    public ResponseEntity<Iterable<LCDto>> findAllDto() {
        return new ResponseEntity<>(largeCategoryService.findAllDto(), HttpStatus.OK);
    }


}
