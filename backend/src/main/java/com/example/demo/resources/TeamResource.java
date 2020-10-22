package com.example.demo.resources;

import com.example.demo.entity.TeamEntity;
import com.example.demo.services.TeamServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/championship")
public class TeamResource {
    @Autowired
    private TeamServices teamServices;

    @GetMapping(path="/team")
    public @ResponseBody Iterable<TeamEntity> getAllTeams() {
        return teamServices.findAllTeams();
    }

    @GetMapping(path="/team/{teamId}")
    public @ResponseBody
    TeamEntity getTeam(@PathVariable Integer teamId) {
        return teamServices.findTeamById(teamId);
    }

    @PostMapping(path="/team")
    public @ResponseBody
    TeamEntity newTeam(@RequestBody TeamEntity newTeam) {
        return teamServices.saveTeam(newTeam);
    }

    @PutMapping(path="/team/{teamId}")
    public @ResponseBody
    TeamEntity replaceTeam(@RequestBody TeamEntity newTeam, @PathVariable Integer teamId) {
        return teamServices.replaceTeam(newTeam, teamId);
    }

    @DeleteMapping(path="/team/{teamId}")
    public @ResponseBody void deleteTeam(@PathVariable Integer teamId) {
        teamServices.deleteTeam(teamId);
    }
}
