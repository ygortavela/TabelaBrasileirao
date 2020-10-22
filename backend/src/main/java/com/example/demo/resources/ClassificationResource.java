package com.example.demo.resources;

import com.example.demo.dto.ClassifiedTeamDTO;
import com.example.demo.services.ClassificationServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="/championship")
public class ClassificationResource {
    @Autowired
    private ClassificationServices classificationServices;

    @GetMapping(path="/classification")
    public @ResponseBody List<ClassifiedTeamDTO> getTeamsClassificationTable() {
        return classificationServices.getClassificationTable();
    }
}
