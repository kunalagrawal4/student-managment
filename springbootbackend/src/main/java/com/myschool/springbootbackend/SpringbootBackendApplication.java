package com.myschool.springbootbackend;

import com.myschool.springbootbackend.repository.StudentAddressRepository;
import com.myschool.springbootbackend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}
	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private StudentAddressRepository studentAddressRepository;
//
//	@Override
//   public void run(String... args) throws Exception {
//	}
}
