package com.example.demo.resources;

import com.example.demo.dto.ClassifiedTeamDTO;
import com.example.demo.dto.MatchDTO;
import com.example.demo.services.SpecializedServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path="/championship")
public class SpecializedResource {
    @Autowired
    private SpecializedServices classificationServices;

    @GetMapping(path="/classification")
    public @ResponseBody List<ClassifiedTeamDTO> getTeamsClassificationTable() {
        return classificationServices.getClassificationTable();
    }

    @GetMapping(path="/matches-by-round")
    public @ResponseBody
    Map<Integer, List<MatchDTO>> getMatchesByRound() {
        return classificationServices.getMatchesByRound();
    }
}
