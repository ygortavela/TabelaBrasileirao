package com.example.demo.services;

import com.example.demo.DemoApplication;
import com.example.demo.dto.PlayMatchDTO;

import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit.jupiter.SpringExtension;


import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@Sql(scripts = "/sql/insert-data-projection.sql")
@Sql(scripts = "/sql/delete-data-projection.sql", executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD)
@SpringBootTest(classes = DemoApplication.class)
public class PlayMatchServicesIntegrationTest {
    @Autowired
    private PlayMatchServices playMatchServices;

    @Test
    public void itShouldAddNewPlayMatchRelationship() {
        PlayMatchDTO teamOnePlayMatchDTO = new PlayMatchDTO(1, 1, 5, 2, 0);
        PlayMatchDTO teamTwoPlayMatchDTO = new PlayMatchDTO(2, 1, 1, 3, 0);

        playMatchServices.savePlayedMatch(teamOnePlayMatchDTO);
        playMatchServices.savePlayedMatch(teamTwoPlayMatchDTO);

        assertNotEquals(playMatchServices.findPlayedMatchById(1).getPlayMatchId(), playMatchServices.findPlayedMatchById(2).getPlayMatchId());
        assertEquals(playMatchServices.findPlayedMatchById(1).getTeam().getTeamId(), 1);
        assertEquals(playMatchServices.findPlayedMatchById(2).getMatch().getMatchId(), 1);
    }
}
