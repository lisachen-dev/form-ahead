package com.formahead.formapi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ElementCollection;
import jakarta.validation.constraints.Email;
import lombok.Data;

import java.util.List;
import java.util.UUID;


@Entity // Required for JPA
@Data // Lombok: Generates getters, setters, toString, etc.
public class FormResponse {

    @Id // TODO primary key of the current entity
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