package com.myschool.springbootbackend.controller;

import com.myschool.springbootbackend.model.StudentAddress;
import com.myschool.springbootbackend.repository.StudentAddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vi/studentaddress")

public class StudentAddressController {
    @Autowired
    public StudentAddressRepository studentAddressRepository;

    @GetMapping
    public List<StudentAddress> getStudentAddressById(){

        return studentAddressRepository.findAll();

    }
    @PostMapping
    public StudentAddress createStudentAddress(@RequestBody StudentAddress studentAddress){
        return studentAddressRepository.save(studentAddress);
    }

}
