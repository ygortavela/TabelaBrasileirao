package com.example.demo.utils;

import com.example.demo.dto.ClassifiedTeamDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class ClassifiedTeamDTOComparatorTest {
    ClassifiedTeamDTO classifiedTeamOne;

    ClassifiedTeamDTO classifiedTeamTwo;

    ClassifiedTeamDTOComparator classifiedTeamComparator;

    @BeforeEach
    public void initFirstTeam() {
        classifiedTeamOne = new ClassifiedTeamDTO("Flamengo", 7, 3, 2, 1,
                0, 7/9, 3, 0, 6, 1, 5);
        classifiedTeamComparator = new ClassifiedTeamDTOComparator();
    }

    @Test
    public void itShouldCompareTeamsOrderSuchThatTeamOneIsBetterClassifiedBecauseItHasHigherPoints() {
        classifiedTeamTwo = new ClassifiedTeamDTO("Corinthians", 4, 3, 1, 1,
                1, 4/9, 3, 0, 6, 1, 5);

        int relativeSortPosition = classifiedTeamComparator.compare(classifiedTeamOne, classifiedTeamTwo);

        assertEquals(relativeSortPosition < 0, true);
    }

    @Test
    public void itShouldCompareTeamsOrderSuchThatTeamOneIsBetterClassifiedBecauseItHasHigherWinAmount() {
        classifiedTeamTwo = new ClassifiedTeamDTO("Corinthians", 7, 6, 1, 4,
                1, 7/18, 3, 0, 6, 1, 5);

        int relativeSortPosition = classifiedTeamComparator.compare(classifiedTeamOne, classifiedTeamTwo);

        assertEquals(relativeSortPosition < 0, true);
    }

    @Test
    public void itShouldCompareTeamsOrderSuchThatTeamOneIsBetterClassifiedBecauseItHasHigherGoalBalance() {
        classifiedTeamTwo = new ClassifiedTeamDTO("Corinthians", 7, 4, 2, 1,
                1, 7/12, 3, 0, 6, 2, 4);

        int relativeSortPosition = classifiedTeamComparator.compare(classifiedTeamOne, classifiedTeamTwo);

        assertEquals(relativeSortPosition < 0, true);
    }

    @Test
    public void itShouldCompareTeamsOrderSuchThatTeamOneIsBetterClassifiedBecauseItHasHigherGoalAmount() {
        classifiedTeamTwo = new ClassifiedTeamDTO("Corinthians", 7, 4, 2, 1,
                1, 7/12, 3, 0, 5, 0, 5);

        int relativeSortPosition = classifiedTeamComparator.compare(classifiedTeamOne, classifiedTeamTwo);

        assertEquals(relativeSortPosition < 0, true);
    }

    @Test
    public void itShouldCompareTeamsOrderSuchThatTeamOneIsBetterClassifiedBecauseItHasSmallerRedCardAmount() {
        classifiedTeamTwo = new ClassifiedTeamDTO("Corinthians", 7, 4, 2, 1,
                1, 7/12, 3, 1, 6, 1, 5);

        int relativeSortPosition = classifiedTeamComparator.compare(classifiedTeamOne, classifiedTeamTwo);

        assertEquals(relativeSortPosition < 0, true);
    }

    @Test
    public void itShouldCompareTeamsOrderSuchThatTeamOneIsBetterClassifiedBecauseItHasSmallerYellowCardAmount() {
        classifiedTeamTwo = new ClassifiedTeamDTO("Corinthians", 7, 4, 2, 1,
                1, 7/12, 6, 0, 6, 1, 5);

        int relativeSortPosition = classifiedTeamComparator.compare(classifiedTeamOne, classifiedTeamTwo);

        assertEquals(relativeSortPosition < 0, true);
    }

    @Test
    public void itShouldCompareTeamsOrderSuchThatTeamOneHasEqualAspectsRelativeToTeamTwo() {
        classifiedTeamTwo = new ClassifiedTeamDTO("Corinthians", 7, 4, 2, 1,
                1, 7/12, 3, 0, 6, 1, 5);

        int relativeSortPosition = classifiedTeamComparator.compare(classifiedTeamOne, classifiedTeamTwo);

        assertEquals(relativeSortPosition == 0, true);
    }
}
