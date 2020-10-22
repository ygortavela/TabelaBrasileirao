package com.example.demo.resources;

import com.example.demo.dto.PlayMatchDTO;
import com.example.demo.entity.PlayMatchEntity;
import com.example.demo.services.PlayMatchServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/championship")
public class PlayMatchResource {
    @Autowired
    private PlayMatchServices playMatchService;

    @GetMapping(path="/play-match")
    public @ResponseBody
    Iterable<PlayMatchEntity> getAllPlayedMatches() {
        return playMatchService.findAllPlayedMatches();
    }

    @GetMapping(path="/play-match/{playMatchId}")
    public @ResponseBody
    PlayMatchEntity getPlayedMatch(@PathVariable Integer playMatchId) {
        return playMatchService.findPlayedMatchById(playMatchId);
    }

    @PostMapping(path="/play-match")
    public @ResponseBody
    PlayMatchEntity newPlayedMatch(@RequestBody PlayMatchDTO newPlayMatchDTO) {
        return playMatchService.savePlayedMatch(newPlayMatchDTO);
    }

    @PutMapping(path="/play-match/{playMatchId}")
    public @ResponseBody
    PlayMatchEntity replacePlayedMatch(@RequestBody PlayMatchDTO newPlayMatchDTO, @PathVariable Integer playMatchId) {
        return playMatchService.replacePlayedMatch(newPlayMatchDTO, playMatchId);
    }

    @DeleteMapping(path="/play-match/{playMatchId}")
    public @ResponseBody void deletePlayedMatch(@PathVariable Integer playMatchId) {
        playMatchService.deletePlayedMatch(playMatchId);
    }
}

