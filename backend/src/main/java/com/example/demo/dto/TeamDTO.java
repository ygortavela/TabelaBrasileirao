package com.example.demo.dto;

import lombok.Data;

@Data
public class TeamDTO {
    private Integer teamId;

    private Integer playMatchId;

    private String name;

    private String initials;

    private Integer goalAmount;

    private Integer yellowCardAmount;

    private Integer redCardAmount;
}
