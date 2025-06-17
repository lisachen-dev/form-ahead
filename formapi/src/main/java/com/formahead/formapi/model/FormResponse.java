package com.formahead.formapi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id; // primary key of the current entity
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ElementCollection;
import jakarta.validation.constraints.Email;
import lombok.Data;

import java.util.List;
import java.util.UUID;


@Entity // Required for JPA
@Data
public class FormResponse {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String fullName;
    private String phone;

    @Email
    private String email;
    private int guestCount;
    private String allergies;
    private String paymentMethod;

    @ElementCollection
    private List<String> availableDays;
    private String additionalNotes;

}