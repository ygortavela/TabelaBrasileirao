package com.example.demo.services;

import com.example.demo.entity.MatchEntity;
import com.example.demo.exceptions.MatchNotFoundException;
import com.example.demo.repository.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatchServices {
    @Autowired
    private MatchRepository matchRepository;

    public Iterable<MatchEntity> findAllMatches() {
        return matchRepository.findAll();
    }

    public MatchEntity findMatchById(Integer matchId) {
        return matchRepository.findById(matchId)
                .orElseThrow(() -> new MatchNotFoundException(matchId));
    }

    public MatchEntity saveMatch(MatchEntity newMatch) {
        return matchRepository.save(newMatch);
    }

    public MatchEntity replaceMatch(MatchEntity newMatch, Integer matchId) {
        MatchEntity match = this.findMatchById(matchId);

        match.setRound(newMatch.getRound());
        match.setMatchDateTime(newMatch.getMatchDateTime());
        match.setMatchPlace(newMatch.getMatchPlace());

        return this.saveMatch(match);
    }

    public void deleteMatch(Integer matchId) {
        matchRepository.deleteById(matchId);
    }
}

