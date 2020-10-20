package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ClassifiedTeamDTO {
    private String teamName;

    private int points;

    private int matchesAmount;

    private int winAmount;

    private int tieAmount;

    private int loseAmount;

    private double performancePercentage;

    private int yellowCardAmount;

    private int redCardAmount;

    private int goalAmount;

    private int negativeGoalAmount;

    private int goalBalance;
}
