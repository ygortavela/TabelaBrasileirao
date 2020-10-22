package com.example.demo.services;

import com.example.demo.dto.ClassifiedTeamDTO;
import com.example.demo.utils.ClassifiedTeamsTableBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class ClassificationServices {
    @Autowired
    private PlayMatchServices playMatchServices;

    public List<ClassifiedTeamDTO> getClassificationTable() {
        return sortedClassificationTable();
    }

    private List<ClassifiedTeamDTO> sortedClassificationTable() {
        ClassifiedTeamsTableBuilder classificationTable = buildClassificationTable();

        return classificationTable.classifiedTeamsSortedByComparatorRules();
    }

    private ClassifiedTeamsTableBuilder buildClassificationTable() {
        ClassifiedTeamsTableBuilder classificationTable = new ClassifiedTeamsTableBuilder(playMatchServices.findAllPlayedMatches());

        classificationTable.setTeamGoalAndMatchStatusForEachMatch();
        classificationTable.setDerivedFieldsForEachClassifiedTeam();

        return classificationTable;
    }
}
