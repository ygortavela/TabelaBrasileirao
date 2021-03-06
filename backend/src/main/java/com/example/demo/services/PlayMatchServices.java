package com.example.demo.services;

import com.example.demo.converters.PlayMatchConverter;
import com.example.demo.entity.PlayMatchEntity;
import com.example.demo.dto.PlayMatchDTO;
import com.example.demo.exceptions.InvalidOperationException;
import com.example.demo.repository.PlayMatchRepository;
import com.example.demo.utils.PlayMatchServicesValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class PlayMatchServices {
    @Autowired
    private PlayMatchRepository playMatchRepository;

    @Autowired
    private PlayMatchConverter playMatchConverter;

    @Autowired
    private TeamServices teamServices;

    @Autowired
    private MatchServices matchServices;

    public Iterable<PlayMatchEntity> findAllPlayedMatches() {
        return playMatchRepository.findAll();
    }

    public PlayMatchEntity findPlayedMatchById(Integer playMatchId) {
        return playMatchRepository.findById(playMatchId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public PlayMatchEntity savePlayedMatch(PlayMatchDTO newPlayMatchDTO) {
        playMatchValidator(newPlayMatchDTO);

        PlayMatchEntity newPlayMatch = playMatchConverter.convertToEntity(newPlayMatchDTO);

        this.setTeamAndMatchEntityById(newPlayMatchDTO, newPlayMatch);

        return playMatchRepository.save(newPlayMatch);
    }

    public PlayMatchEntity replacePlayedMatch(PlayMatchDTO newPlayMatchDTO, Integer playMatchId) {
        PlayMatchEntity playMatch = this.findPlayedMatchById(playMatchId);

        deletePlayedMatch(playMatchId);

        try {
            playMatchValidator(newPlayMatchDTO);

            this.setTeamAndMatchEntityById(newPlayMatchDTO, playMatch);
            playMatch.setGoalAmount(newPlayMatchDTO.getGoalAmount());
            playMatch.setYellowCardAmount(newPlayMatchDTO.getYellowCardAmount());
            playMatch.setRedCardAmount(newPlayMatchDTO.getRedCardAmount());
        } catch (InvalidOperationException ex) {

        }

        return playMatchRepository.save(playMatch);
    }

    public void deletePlayedMatch(Integer playMatchId) {
        playMatchRepository.deleteById(playMatchId);
    }

    public void deletePlayedMatchesByMatchId(Integer teamId) {
        List<PlayMatchEntity> playMatchListByTeamId = playMatchRepository.findPlayedMatchesByTeamId(teamId);

        for (PlayMatchEntity playMatchByTeamId : playMatchListByTeamId) {
            int matchId = playMatchByTeamId.getMatch().getMatchId();
            List<PlayMatchEntity> playMatchListByMatchId = playMatchRepository.findPlayedMatchesByMatchId(matchId);

            for (PlayMatchEntity playMatchByMatchId : playMatchListByMatchId)
                playMatchRepository.deleteById(playMatchByMatchId.getPlayMatchId());
        }
    }

    private void playMatchValidator(PlayMatchDTO playMatchDTO) {
        List<PlayMatchEntity> playMatchListByMatchId = playMatchRepository.findPlayedMatchesByMatchId(playMatchDTO.getMatchId());
        PlayMatchServicesValidator validator = new PlayMatchServicesValidator(playMatchDTO, playMatchListByMatchId);

        validator.areTeamsByMatchGreaterThanLimit();
        validator.isSameTeamPlayingSameMatch();
    }

    private void setTeamAndMatchEntityById(PlayMatchDTO playMatchDTO, PlayMatchEntity playMatch) {
        playMatch.setTeam(teamServices.findTeamById(playMatchDTO.getTeamId()));
        playMatch.setMatch(matchServices.findMatchById(playMatchDTO.getMatchId()));
    }
}
