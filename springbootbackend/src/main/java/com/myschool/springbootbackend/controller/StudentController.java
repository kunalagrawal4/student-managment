package com.myschool.springbootbackend.controller;


import com.myschool.springbootbackend.exception.ResourceNotFoundException;
import com.myschool.springbootbackend.model.Student;
import com.myschool.springbootbackend.model.StudentAddress;
import com.myschool.springbootbackend.repository.StudentAddressRepository;
import com.myschool.springbootbackend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/vi/students")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private StudentAddressRepository studentAddressRepository;

    @GetMapping
    public List<Student> getStudentById(){

        return studentRepository.findAll();

    }

    @PostMapping
    public Student createStudent(@RequestBody Student student){
        return studentRepository.save(student);

    }

    //build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable long id){
        Student student=studentRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Student Not Exist "+id));
        return ResponseEntity.ok(student);
    }

    @PutMapping("{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable long id,@RequestBody Student studentdetail){
        Student updatedstudent=studentRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Student Not Exist"+id));
        StudentAddress updatestudentaddress=studentAddressRepository.findById(updatedstudent.getStudentAddress().getId())
                .orElseThrow(()->new ResourceNotFoundException("Student Not Exist"+id));

        updatedstudent.setName(studentdetail.getName());
        updatedstudent.setEmail(studentdetail.getEmail());
        updatedstudent.setPhone(studentdetail.getPhone());
        updatedstudent.setGender(studentdetail.getGender());
        updatedstudent.setBirthdate(studentdetail.getBirthdate());
        updatestudentaddress.setStudentId(studentdetail.getStudentAddress().getStudentId());
        updatestudentaddress.setStreetLineFirst(studentdetail.getStudentAddress().getStreetLineFirst());
        updatestudentaddress.setStreetLineSecond(studentdetail.getStudentAddress().getStreetLineSecond());
        updatestudentaddress.setCity(studentdetail.getStudentAddress().getCity());
        updatestudentaddress.setCountry(studentdetail.getStudentAddress().getCountry());

        updatestudentaddress.setPinCode(studentdetail.getStudentAddress().getPinCode());

        updatedstudent.setStudentAddress(updatestudentaddress);
        studentRepository.save(updatedstudent);
        return ResponseEntity.ok(updatedstudent);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteStudent(@PathVariable long id){
        Student student=studentRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Student Not Exist"+id));
        studentRepository.delete(student);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
