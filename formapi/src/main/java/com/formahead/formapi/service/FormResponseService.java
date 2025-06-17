package com.formahead.formapi.service;

import com.formahead.formapi.model.FormResponse;
import com.formahead.formapi.repository.FormResponseRepository;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FormResponseService {

    private final FormResponseRepository formResponseRepository;

    public List<FormResponse> getAllFormResponses() {
        return formResponseRepository.findAll();
    }

    public FormResponse createFormResponse(FormResponse formResponse) {
        return formResponseRepository.save(formResponse);
    }
}
