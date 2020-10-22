package com.example.demo.utils;

import com.example.demo.dto.ClassifiedTeamDTO;

import java.util.Comparator;

public class ClassifiedTeamDTOComparator implements Comparator<ClassifiedTeamDTO> {
    public int compare(ClassifiedTeamDTO teamOne, ClassifiedTeamDTO teamTwo) {
        int currentComparatorValue = compareAttribute(teamOne.getPoints(), teamTwo.getPoints());

        if (currentComparatorValue != 0) return currentComparatorValue;

        currentComparatorValue = compareAttribute(teamOne.getWinAmount(), teamTwo.getWinAmount());

        if (currentComparatorValue != 0) return currentComparatorValue;

        currentComparatorValue = compareAttribute(teamOne.getGoalBalance(), teamTwo.getGoalBalance());

        if (currentComparatorValue != 0) return currentComparatorValue;

        currentComparatorValue = compareAttribute(teamOne.getGoalAmount(), teamTwo.getGoalAmount());

        if (currentComparatorValue != 0) return currentComparatorValue;

        currentComparatorValue = compareAttribute(teamTwo.getRedCardAmount(), teamOne.getRedCardAmount());

        if (currentComparatorValue != 0) return currentComparatorValue;

        currentComparatorValue = compareAttribute(teamTwo.getYellowCardAmount(), teamOne.getYellowCardAmount());

        return currentComparatorValue;
    }

    private int compareAttribute(int attributeOne, int attributeTwo) {
        if (attributeOne > attributeTwo) return -1;
        else if (attributeOne < attributeTwo) return 1;

        return 0;
    }
}
