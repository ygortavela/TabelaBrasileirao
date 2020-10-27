package com.example.demo.services;

import com.example.demo.dto.ClassifiedTeamDTO;
import com.example.demo.dto.MatchDTO;
import com.example.demo.utils.ClassifiedTeamsTableBuilder;
import com.example.demo.utils.MatchesByRoundMapBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class SpecializedServices {
    @Autowired
    private PlayMatchServices playMatchServices;

    public Map<Integer, List<MatchDTO>> getMatchesByRound() {
        MatchesByRoundMapBuilder matchesByRoundMapBuilder = new MatchesByRoundMapBuilder(playMatchServices.findAllPlayedMatches());

        return matchesByRoundMapBuilder.getMatchesByRoundMap();
    }

    public List<ClassifiedTeamDTO> getClassificationTable() {
        return sortedClassificationTable();
    }

    private List<ClassifiedTeamDTO> sortedClassificationTable() {
        ClassifiedTeamsTableBuilder classificationTable = buildClassificationTable();

        return classificationTable.listTeamsSortedByComparatorRules();
    }

    private ClassifiedTeamsTableBuilder buildClassificationTable() {
        ClassifiedTeamsTableBuilder classificationTable = new ClassifiedTeamsTableBuilder(playMatchServices.findAllPlayedMatches());

        classificationTable.setTeamGoalAndMatchResultForEachMatch();
        classificationTable.setDerivedFieldsForEachClassifiedTeam();

        return classificationTable;
    }
}
