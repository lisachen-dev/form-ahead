package com.formahead.formapi.model;

import lombok.Data;
import jakarta.persistence.Id;
import java.util.List;
import java.util.UUID;

@Entity // TODO tells Spring Boot this class maps to a DB table
@Data
public class FormResponse {

    @Id // TODO primary key of the current entity
    @GeneratedValue(strategy = GenerationType.UUID)
    private Long id;

    private String fullName;
    private String phone;
    private

}