package com.example.demo.services;

import com.example.demo.entity.TeamEntity;
import com.example.demo.exceptions.TeamNotFoundException;
import com.example.demo.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeamServices {
    @Autowired
    private TeamRepository teamRepository;

    public Iterable<TeamEntity> findAllTeams() {
        return teamRepository.findAll();
    }

    public TeamEntity findTeamById(Integer teamId) {
        return teamRepository.findById(teamId)
                .orElseThrow(() -> new TeamNotFoundException(teamId));
    }

    public TeamEntity saveTeam(TeamEntity newTeam) {
        return teamRepository.save(newTeam);
    }

    public TeamEntity replaceTeam(TeamEntity newTeam, Integer teamId) {
        TeamEntity team = this.findTeamById(teamId);

        team.setName(newTeam.getName());
        team.setInitials(newTeam.getInitials());

        return this.saveTeam(team);
    }

    public void deleteTeam(Integer teamId) {
        teamRepository.deleteById(teamId);
    }
}
