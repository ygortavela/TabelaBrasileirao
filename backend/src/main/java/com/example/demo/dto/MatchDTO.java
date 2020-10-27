package com.example.demo.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Data
public class MatchDTO {
    private Integer matchId;

    private Integer round;

    private LocalDateTime matchDateTime;

    private String matchPlace;

    private List<TeamDTO> teamsThatPlayedMatchList;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof MatchDTO)) return false;

        MatchDTO matchDTO = (MatchDTO) o;

        return Objects.equals(getMatchId(), matchDTO.getMatchId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getMatchId());
    }
}
