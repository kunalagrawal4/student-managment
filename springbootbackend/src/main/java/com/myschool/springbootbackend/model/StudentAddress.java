package com.myschool.springbootbackend.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "studentAddress")
public class StudentAddress {

       @Id
       @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;

        @Column(name ="studentId",unique = true)
        private String studentId;

        @Column(name= "street_Line1")
        private String streetLineFirst;

        @Column(name= "street_Line2")
        private String streetLineSecond;

        @Column(name= "city")
        private String city;

        @Column(name= "country")
        private String country;

        @Column(name= "pin_code")
        private String pinCode;






}
