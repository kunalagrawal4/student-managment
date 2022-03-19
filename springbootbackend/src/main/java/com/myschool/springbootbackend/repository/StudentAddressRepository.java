package com.myschool.springbootbackend.repository;


import com.myschool.springbootbackend.model.StudentAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentAddressRepository extends JpaRepository<StudentAddress,Long> {

}
