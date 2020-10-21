package com.example.demo.utils;

import com.example.demo.dto.PlayMatchDTO;
import com.example.demo.entity.MatchEntity;
import com.example.demo.entity.PlayMatchEntity;
import com.example.demo.entity.TeamEntity;
import com.example.demo.exceptions.InvalidOperationException;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class PlayMatchServicesValidatorTest {
    @Test
    public void itShouldThrownInvalidOperationBecauseThereAreTwoTeamsOnTheSameMatchAlready() {
        final int MATCH_ID = 1;

        // Given a list of relationships between team and match by matchId, with two teams which have been registered on a match
        TeamEntity teamOne = new TeamEntity(1, "Flamengo", "FLA");
        TeamEntity teamTwo = new TeamEntity(2, "Corinthians", "COR");
        MatchEntity match = new MatchEntity(MATCH_ID, 1, LocalDateTime.parse("2020-10-01T10:30:00"), "Maracanã");

        List<PlayMatchEntity> playMatchListByMatchId = new ArrayList<PlayMatchEntity>();
        playMatchListByMatchId.add(new PlayMatchEntity(1, teamOne, match, 3, 2, 0));
        playMatchListByMatchId.add(new PlayMatchEntity(1, teamTwo, match, 3, 2, 0));

        // And a new team that is related with that match
        PlayMatchDTO playMatchDTO = new PlayMatchDTO(3, MATCH_ID, 3, 2, 0);

        // And a validator for that relationship
        PlayMatchServicesValidator validator = new PlayMatchServicesValidator(playMatchDTO, playMatchListByMatchId);

        // When validate that new playMatchDTO it should throw a invalid operation exception, because there are two teams on the same match already
        assertThrows(InvalidOperationException.class, () -> validator.areTeamsByMatchGreaterThanLimit());
    }

    @Test
    public void itShouldThrownInvalidOperationBecauseSameTeamIsPlayingSameMatch() {
        final int MATCH_ID = 1;
        final int TEAM_ID = 1;

        // Given a list of relationships between team and match by matchId, with one team which has been registered on a match
        TeamEntity teamOne = new TeamEntity(TEAM_ID, "Flamengo", "FLA");
        MatchEntity match = new MatchEntity(MATCH_ID, 1, LocalDateTime.parse("2020-10-01T10:30:00"), "Maracanã");

        List<PlayMatchEntity> playMatchListByMatchId = new ArrayList<PlayMatchEntity>();
        playMatchListByMatchId.add(new PlayMatchEntity(1, teamOne, match, 3, 2, 0));

        // And a new team that is related with that match, whose teamId is the same of the team that has had a relationship with that match
        PlayMatchDTO playMatchDTO = new PlayMatchDTO(TEAM_ID, MATCH_ID, 3, 2, 0);

        // And a validator for that new relationship
        PlayMatchServicesValidator validator = new PlayMatchServicesValidator(playMatchDTO, playMatchListByMatchId);

        // When validate that new playMatchDTO it should throw a invalid operation exception, because we are trying to relate the same team with the same match
        assertThrows(InvalidOperationException.class, () -> validator.isSameTeamPlayingSameMatch());
    }

    @Test
    public void itShouldNotThrownAnyExceptionBecauseEveryValidationAreValid() {
        final int MATCH_ID = 1;
        final int TEAM_ONE_ID = 1;
        final int TEAM_TWO_ID = 2;

        // Given a list of relationships between team and match by matchId, with one team which has been registered on a match
        TeamEntity teamOne = new TeamEntity(TEAM_ONE_ID, "Flamengo", "FLA");
        MatchEntity match = new MatchEntity(MATCH_ID, 1, LocalDateTime.parse("2020-10-01T10:30:00"), "Maracanã");

        List<PlayMatchEntity> playMatchListByMatchId = new ArrayList<PlayMatchEntity>();
        playMatchListByMatchId.add(new PlayMatchEntity(1, teamOne, match, 3, 2, 0));

        // And a new team that plays the same match and is different from the one that has been related with that match before
        PlayMatchDTO playMatchDTO = new PlayMatchDTO(TEAM_TWO_ID, MATCH_ID, 3, 2, 0);

        // And a validator for that new relationship
        PlayMatchServicesValidator validator = new PlayMatchServicesValidator(playMatchDTO, playMatchListByMatchId);

        // When validate that new playMatchDTO it should not thrown any exception
        assertAll(
                () -> validator.areTeamsByMatchGreaterThanLimit(),
                () -> validator.isSameTeamPlayingSameMatch()
        );
    }
}