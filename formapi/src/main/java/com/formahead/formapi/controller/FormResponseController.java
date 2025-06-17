package com.formahead.formapi.controller;

import com.formahead.formapi.model.FormResponse;
import com.formahead.formapi.service.FormResponseService;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;
import java.util.List;

@RestController
@RequestMapping("/api/form-responses")
@RequiredArgsConstructor
public class FormResponseController {

    private final FormResponseService formResponseService;

    @GetMapping List<FormResponse> getFormResponses(){
        return formResponseService.getAllFormResponses();
    }

    @PostMapping
    public FormResponse addFormResponse(@RequestBody FormResponse formResponse){
        return formResponseService.createFormResponse(formResponse);
    }

}