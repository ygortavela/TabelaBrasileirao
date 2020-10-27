package com.example.demo.utils;

import com.example.demo.dto.ClassifiedTeamDTO;
import com.example.demo.entity.MatchEntity;
import com.example.demo.entity.PlayMatchEntity;
import com.example.demo.entity.TeamEntity;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class ClassifiedTeamsTableBuilderTest {
    private ClassifiedTeamsTableBuilder classificationTable;

    @BeforeEach
    public void initAttributes() {
        TeamEntity teamOne = new TeamEntity(1, "Flamengo", "FLA");
        TeamEntity teamTwo = new TeamEntity(2, "Corinthians", "COR");
        MatchEntity matchOne = new MatchEntity(1, 1, LocalDateTime.parse("2020-10-01T10:30:00"), "Neo Química Arena");
        MatchEntity matchTwo = new MatchEntity(2, 1, LocalDateTime.parse("2020-10-14T10:30:00"), "Maracanã");

        List<PlayMatchEntity> playMatchList = new ArrayList<>();
        playMatchList.add(new PlayMatchEntity(1, teamOne, matchOne, 3, 2, 0));
        playMatchList.add(new PlayMatchEntity(2, teamTwo, matchOne, 0, 3, 0));
        playMatchList.add(new PlayMatchEntity(3, teamOne, matchTwo, 1, 0, 0));
        playMatchList.add(new PlayMatchEntity(4, teamTwo, matchTwo, 1, 2, 0));

        classificationTable = new ClassifiedTeamsTableBuilder(playMatchList);
    }

    @Test
    public void itShouldSetGoalAndMatchResultCorrectly() {
        List<ClassifiedTeamDTO> classifiedTeamList;

        classificationTable.setTeamGoalAndMatchResultForEachMatch();
        classifiedTeamList = classificationTable.listTeams();

        assertEquals(classifiedTeamList.get(0).getGoalAmount(), 4);
        assertEquals(classifiedTeamList.get(1).getGoalAmount(), 1);
        assertEquals(classifiedTeamList.get(0).getNegativeGoalAmount(), 1);
        assertEquals(classifiedTeamList.get(1).getNegativeGoalAmount(), 4);
        assertEquals(classifiedTeamList.get(0).getWinAmount(), 1);
        assertEquals(classifiedTeamList.get(1).getWinAmount(), 0);
        assertEquals(classifiedTeamList.get(0).getLoseAmount(), 0);
        assertEquals(classifiedTeamList.get(1).getLoseAmount(), 1);
        assertEquals(classifiedTeamList.get(0).getTieAmount(), 1);
        assertEquals(classifiedTeamList.get(1).getTieAmount(), 1);
    }

    @Test
    public void itShouldSetDerivedFieldsCorrectlyAfterSetTeamAndMatchResult() {
        List<ClassifiedTeamDTO> classifiedTeamList;
        DecimalFormat df = new DecimalFormat("#.#");

        classificationTable.setTeamGoalAndMatchResultForEachMatch();
        classificationTable.setDerivedFieldsForEachClassifiedTeam();
        classifiedTeamList = classificationTable.listTeams();

        assertEquals(classifiedTeamList.get(0).getMatchesAmount(), 2);
        assertEquals(classifiedTeamList.get(1).getMatchesAmount(), 2);
        assertEquals(classifiedTeamList.get(0).getPoints(), 4);
        assertEquals(classifiedTeamList.get(1).getPoints(), 1);
        assertEquals(classifiedTeamList.get(0).getPerformancePercentage(), Double.valueOf(df.format(100.0*(4.0/6.0))));
        assertEquals(classifiedTeamList.get(1).getPerformancePercentage(), Double.valueOf(df.format(100.0*(1.0/6.0))));
        assertEquals(classifiedTeamList.get(0).getGoalBalance(), 3);
        assertEquals(classifiedTeamList.get(1).getGoalBalance(), -3);
    }
}
