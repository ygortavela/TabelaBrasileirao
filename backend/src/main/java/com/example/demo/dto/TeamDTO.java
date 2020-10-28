package com.example.demo.dto;

import lombok.Data;

@Data
public class TeamDTO {
    private Integer teamId;

    private String name;

    private String initials;

    private Integer goalAmount;
}
