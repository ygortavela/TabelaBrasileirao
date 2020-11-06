package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlayMatchDTO {
    private Integer teamId;

    private Integer matchId;

    private Integer goalAmount;

    private Integer yellowCardAmount;

    private Integer redCardAmount;
}
