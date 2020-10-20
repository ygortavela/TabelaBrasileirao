package com.example.demo.services;

import com.example.demo.dto.ClassifiedTeamDTO;
import com.example.demo.entity.PlayMatchEntity;
import com.example.demo.utils.ClassifiedTeamDTOComparator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class ClassificationServices {
    @Autowired
    private PlayMatchServices playMatchServices;

    private HashMap<Integer, ClassifiedTeamDTO> teamMapClassificationTableRow;

    private HashMap<Integer, List<PlayMatchEntity>> matchMapTeams;

    public List<ClassifiedTeamDTO> getClassificationTable() {
        buildClassifiedTeamsHashMappedByTeamId();

        return classifiedTeamsSortedByPointsList();
    }

    private void buildClassifiedTeamsHashMappedByTeamId() {
        teamMapClassificationTableRow = new HashMap<>();
        matchMapTeams = new HashMap<>();

        initializeHashMapsWithPlayedMatches();
        setTeamGoalAndMatchStatusForEachMatch();
        setDerivedFieldsForEachClassifiedTeam();
    }

    private void initializeHashMapsWithPlayedMatches() {
        for (PlayMatchEntity playMatchEntity : playMatchServices.findAllPlayedMatches()) {
            mapMatchIdToPlayMatchEntity(playMatchEntity);
            mapTeamIdToClassifiedTeam(playMatchEntity);
        }
    }

    private void mapMatchIdToPlayMatchEntity(PlayMatchEntity playMatchEntity) {
        int matchId = playMatchEntity.getMatch().getMatchId();

        List<PlayMatchEntity> teamListByMatchId = matchMapTeams.get(matchId);

        if (teamListByMatchId == null) {
            teamListByMatchId = new ArrayList<PlayMatchEntity>();
            teamListByMatchId.add(playMatchEntity);
            matchMapTeams.put(matchId, teamListByMatchId);
        } else {
            teamListByMatchId.add(playMatchEntity);
        }
    }

    private void mapTeamIdToClassifiedTeam(PlayMatchEntity playMatchEntity) {
        int teamId = playMatchEntity.getTeam().getTeamId();
        ClassifiedTeamDTO classifiedTeam = teamMapClassificationTableRow.get(teamId);

        if (classifiedTeam == null) {
            classifiedTeam = new ClassifiedTeamDTO(playMatchEntity.getTeam().getName(), 0,
                    0, 0, 0, 0, 0,
                    playMatchEntity.getYellowCardAmount(),playMatchEntity.getRedCardAmount(),
                    playMatchEntity.getGoalAmount(),0,0);

            teamMapClassificationTableRow.put(teamId, classifiedTeam);
        } else {
            classifiedTeam.setYellowCardAmount(classifiedTeam.getYellowCardAmount() + playMatchEntity.getYellowCardAmount());
            classifiedTeam.setRedCardAmount(classifiedTeam.getRedCardAmount() + playMatchEntity.getRedCardAmount());
            classifiedTeam.setGoalAmount(classifiedTeam.getGoalAmount() + playMatchEntity.getGoalAmount());
        }
    }

    private void setTeamGoalAndMatchStatusForEachMatch() {
        matchMapTeams.forEach((key, value) -> {
            PlayMatchEntity teamOnePlayMatch = value.get(0);
            PlayMatchEntity teamTwoPlayMatch = value.get(1);
            ClassifiedTeamDTO classifiedTeamOne = teamMapClassificationTableRow.get(teamOnePlayMatch.getTeam().getTeamId());
            ClassifiedTeamDTO classifiedTeamTwo = teamMapClassificationTableRow.get(teamTwoPlayMatch.getTeam().getTeamId());
            int teamOneGoalAmount = teamOnePlayMatch.getGoalAmount();
            int teamTwoGoalAmount = teamTwoPlayMatch.getGoalAmount();

            if (teamOneGoalAmount > teamTwoGoalAmount) {
                classifiedTeamOne.setWinAmount(classifiedTeamOne.getWinAmount() + 1);
                classifiedTeamTwo.setLoseAmount(classifiedTeamTwo.getLoseAmount() + 1);
            } else if (teamOneGoalAmount < teamTwoGoalAmount) {
                classifiedTeamTwo.setWinAmount(classifiedTeamTwo.getWinAmount() + 1);
                classifiedTeamOne.setLoseAmount(classifiedTeamOne.getLoseAmount() + 1);
            } else {
                classifiedTeamOne.setTieAmount(classifiedTeamOne.getTieAmount() + 1);
                classifiedTeamTwo.setTieAmount(classifiedTeamTwo.getTieAmount() + 1);
            }

            classifiedTeamOne.setNegativeGoalAmount(classifiedTeamOne.getNegativeGoalAmount() + teamTwoGoalAmount);
            classifiedTeamTwo.setNegativeGoalAmount(classifiedTeamTwo.getNegativeGoalAmount() + teamOneGoalAmount);
        });
    }

    private void setDerivedFieldsForEachClassifiedTeam() {
        teamMapClassificationTableRow.forEach((key, value) -> {
            setClassifiedTeamMatchAmount(value);
            setClassifiedTeamPointsAndPerformancePercentage(value);
            setClassifiedTeamGoalBalance(value);
        });
    }

    private void setClassifiedTeamMatchAmount(ClassifiedTeamDTO classifiedTeam) {
        int matchesAmount = classifiedTeam.getWinAmount() + classifiedTeam.getLoseAmount() + classifiedTeam.getTieAmount();

        classifiedTeam.setMatchesAmount(matchesAmount);
    }

    private void setClassifiedTeamPointsAndPerformancePercentage(ClassifiedTeamDTO classifiedTeam) {
        int totalPoints = 3 * classifiedTeam.getWinAmount() + classifiedTeam.getTieAmount();
        double performancePercentage = (totalPoints/(classifiedTeam.getMatchesAmount() * 3)) * 100;

        classifiedTeam.setPoints(totalPoints);
        classifiedTeam.setPerformancePercentage(performancePercentage);
    }

    private void setClassifiedTeamGoalBalance(ClassifiedTeamDTO classifiedTeam) {
        int goalBalance = classifiedTeam.getGoalAmount() - classifiedTeam.getNegativeGoalAmount();

        classifiedTeam.setGoalBalance(goalBalance);
    }

    private List<ClassifiedTeamDTO> classifiedTeamsSortedByPointsList() {
        List<ClassifiedTeamDTO> classifiedTeamList = new ArrayList<ClassifiedTeamDTO>(teamMapClassificationTableRow.values());

        classifiedTeamList.sort(new ClassifiedTeamDTOComparator());

        return classifiedTeamList;
    }
}
