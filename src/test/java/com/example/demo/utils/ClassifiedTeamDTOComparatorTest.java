package com.example.demo.utils;

import com.example.demo.dto.ClassifiedTeamDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;

//@ExtendWith(MockitoExtension.class)
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
    public void itShouldSortInDecreaseOrderTeamsSuchThatTeamOneIsBetterClassifiedBecauseItHasHigherPoints() {
        classifiedTeamTwo = new ClassifiedTeamDTO("Corinthians", 4, 3, 1, 1,
                1, 4/9, 3, 0, 6, 1, 5);

        int relativeSortPosition = classifiedTeamComparator.compare(classifiedTeamOne, classifiedTeamTwo);

        assertEquals(relativeSortPosition < 0, true);
    }

    @Test
    public void itShouldSortInDecreaseOrderTeamsSuchThatTeamOneIsBetterClassifiedBecauseItHasHigherWinAmount() {
        classifiedTeamTwo = new ClassifiedTeamDTO("Corinthians", 7, 6, 1, 4,
                1, 7/18, 3, 0, 6, 1, 5);

        int relativeSortPosition = classifiedTeamComparator.compare(classifiedTeamOne, classifiedTeamTwo);

        assertEquals(relativeSortPosition < 0, true);
    }

    @Test
    public void itShouldSortInDecreaseOrderTeamsSuchThatTeamOneIsBetterClassifiedBecauseItHasHigherGoalBalance() {
        classifiedTeamTwo = new ClassifiedTeamDTO("Corinthians", 7, 4, 2, 1,
                1, 7/18, 3, 0, 6, 2, 4);

        int relativeSortPosition = classifiedTeamComparator.compare(classifiedTeamOne, classifiedTeamTwo);

        assertEquals(relativeSortPosition < 0, true);
    }

    @Test
    public void itShouldSortInDecreaseOrderTeamsSuchThatTeamOneIsBetterClassifiedBecauseItHasHigherGoalAmount() {
        classifiedTeamTwo = new ClassifiedTeamDTO("Corinthians", 7, 4, 2, 1,
                1, 7/18, 3, 0, 5, 0, 5);

        int relativeSortPosition = classifiedTeamComparator.compare(classifiedTeamOne, classifiedTeamTwo);

        assertEquals(relativeSortPosition < 0, true);
    }

    @Test
    public void itShouldSortInDecreaseOrderTeamsSuchThatTeamOneIsBetterClassifiedBecauseItHasSmallerRedCardAmount() {
        classifiedTeamTwo = new ClassifiedTeamDTO("Corinthians", 7, 4, 2, 1,
                1, 7/18, 3, 1, 6, 1, 5);

        int relativeSortPosition = classifiedTeamComparator.compare(classifiedTeamOne, classifiedTeamTwo);

        assertEquals(relativeSortPosition < 0, true);
    }

    @Test
    public void itShouldSortInDecreaseOrderTeamsSuchThatTeamOneIsBetterClassifiedBecauseItHasSmallerYellowCardAmount() {
        classifiedTeamTwo = new ClassifiedTeamDTO("Corinthians", 7, 4, 2, 1,
                1, 7/18, 6, 0, 6, 1, 5);

        int relativeSortPosition = classifiedTeamComparator.compare(classifiedTeamOne, classifiedTeamTwo);

        assertEquals(relativeSortPosition < 0, true);
    }

    @Test
    public void itShouldSortInDecreaseOrderTeamsSuchThatTeamOneHasEqualAspectsRelativeToTeamTwo() {
        classifiedTeamTwo = new ClassifiedTeamDTO("Corinthians", 7, 4, 2, 1,
                1, 7/18, 3, 0, 6, 1, 5);

        int relativeSortPosition = classifiedTeamComparator.compare(classifiedTeamOne, classifiedTeamTwo);

        assertEquals(relativeSortPosition == 0, true);
    }
}
