package com.formahead.formapi.service;

import com.formahead.formahead.model.FormResponse;
import com.formahead.formahead.repository.FormResponseRepository;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

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
