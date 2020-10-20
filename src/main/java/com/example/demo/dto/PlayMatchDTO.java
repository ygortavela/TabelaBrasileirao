package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PlayMatchDTO {
    private Integer teamId;

    private Integer matchId;

    private Integer goalAmount;

    private Integer yellowCardAmount;

    private Integer redCardAmount;

//    public PlayMatchDTO(int teamId, int matchId, int goalAmount, int yellowCardAmount, int redCardAmount) {
//        this.setTeamId(teamId);
//        this.setMatchId(matchId);
//        this.setGoalAmount(goalAmount);
//        this.setYellowCardAmount(yellowCardAmount);
//        this.setRedCardAmount(redCardAmount);
//    }
}
