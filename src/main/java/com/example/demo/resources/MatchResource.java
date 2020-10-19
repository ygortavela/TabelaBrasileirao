package com.example.demo.resources;

import com.example.demo.entity.MatchEntity;
import com.example.demo.services.MatchServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/demo")
public class MatchResource {
    @Autowired
    private MatchServices matchService;

    @GetMapping(path="/match")
    public @ResponseBody Iterable<MatchEntity> getAllMatches() {
        return matchService.findAllMatches();
    }

    @GetMapping(path="/match/{matchId}")
    public @ResponseBody
    MatchEntity getMatch(@PathVariable Integer matchId) {
        return matchService.findMatchById(matchId);
    }

    @PostMapping(path="/match")
    public @ResponseBody
    MatchEntity newMatch(@RequestBody MatchEntity newMatch) {
        return matchService.saveMatch(newMatch);
    }

    @PutMapping(path="/match/{matchId}")
    public @ResponseBody
    MatchEntity replaceMatch(@RequestBody MatchEntity newMatch, @PathVariable Integer matchId) {
        return matchService.replaceMatch(newMatch, matchId);
    }

    @DeleteMapping(path="/match/{matchId}")
    public @ResponseBody void deleteMatch(@PathVariable Integer matchId) {
        matchService.deleteMatch(matchId);
    }
}
