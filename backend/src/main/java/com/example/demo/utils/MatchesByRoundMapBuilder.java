package com.example.demo.utils;

import com.example.demo.dto.MatchDTO;
import com.example.demo.dto.TeamDTO;
import com.example.demo.entity.PlayMatchEntity;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MatchesByRoundMapBuilder {
    private List<MatchDTO> matchesGroupedByTeamsThatPlayedMatch;

    public MatchesByRoundMapBuilder(Iterable<PlayMatchEntity> playMatchEntitiesList) {
        Map<Integer, MatchDTO> teamsThatPlayedMatchByMatchId = new HashMap<>();

        for (PlayMatchEntity playMatchEntity : playMatchEntitiesList) {
            mapMatchToTeamsThatPlayedMatch(teamsThatPlayedMatchByMatchId, playMatchEntity);
        }

        matchesGroupedByTeamsThatPlayedMatch = new ArrayList<>(teamsThatPlayedMatchByMatchId.values());
    }

    private void mapMatchToTeamsThatPlayedMatch(Map<Integer, MatchDTO> teamsThatPlayedMatchByMatchId, PlayMatchEntity playMatchEntity) {
        ModelMapper modelMapper = new ModelMapper();
        int matchId = playMatchEntity.getMatch().getMatchId();
        MatchDTO matchDTO = teamsThatPlayedMatchByMatchId.get(matchId);
        TeamDTO teamDTO = modelMapper.map(playMatchEntity.getTeam(), TeamDTO.class);
        teamDTO.setPlayMatchId(playMatchEntity.getPlayMatchId());
        teamDTO.setGoalAmount(playMatchEntity.getGoalAmount());
        teamDTO.setYellowCardAmount(playMatchEntity.getYellowCardAmount());
        teamDTO.setRedCardAmount(playMatchEntity.getRedCardAmount());

        if (matchDTO == null) {
            matchDTO = modelMapper.map(playMatchEntity.getMatch(), MatchDTO.class);
            matchDTO.setTeamsThatPlayedMatchList(new ArrayList<>());
            matchDTO.getTeamsThatPlayedMatchList().add(teamDTO);
            teamsThatPlayedMatchByMatchId.put(matchId, matchDTO);
        } else {
            matchDTO.getTeamsThatPlayedMatchList().add(teamDTO);
        }
    }

    public Map<Integer, List<MatchDTO>> getMatchesByRoundMap() {
        Map<Integer, List<MatchDTO>> matchesByRound = new HashMap<>();
        List<MatchDTO> matchDTOList;

        for (MatchDTO matchDTO : matchesGroupedByTeamsThatPlayedMatch) {
            matchDTOList = matchesByRound.get(matchDTO.getRound());

            if (matchDTOList == null) {
                matchDTOList = new ArrayList<>();
                matchesByRound.put(matchDTO.getRound(), matchDTOList);
            }

            matchDTOList.add(matchDTO);
        }

        return matchesByRound;
    }
}
