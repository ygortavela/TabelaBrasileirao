package com.example.demo.utils;

import com.example.demo.dto.PlayMatchDTO;
import com.example.demo.entity.PlayMatchEntity;
import com.example.demo.exceptions.InvalidOperationException;

import java.util.List;

public class PlayMatchServicesValidator {
    private List<PlayMatchEntity> playMatchListByMatchId;
    private PlayMatchDTO playMatchDTO;

    private final int MAX_TEAM_PER_MATCH = 2;

    public PlayMatchServicesValidator(PlayMatchDTO playMatchDTO, List<PlayMatchEntity> playMatchListByMatchId) {
        this.playMatchDTO = playMatchDTO;
        this.playMatchListByMatchId = playMatchListByMatchId;
    }

    public void areTeamsByMatchGreaterThanLimit() {
        if (playMatchListByMatchId.size() >= MAX_TEAM_PER_MATCH)
            throw new InvalidOperationException();
    }

    public void isSameTeamPlayingSameMatch() {
        int teamId = playMatchDTO.getTeamId();

        for (PlayMatchEntity playMatch : playMatchListByMatchId) {
            if (playMatch.getTeam().getTeamId().equals(teamId))
                throw new InvalidOperationException();
        }
    }
}
