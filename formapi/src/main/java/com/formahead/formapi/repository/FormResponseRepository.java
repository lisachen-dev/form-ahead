package com.formahead.formapi.repository;

import com.formahead.formapi.model.FormResponse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface FormResponseRepository extends JpaRepository<FormResponse, UUID> {

}