package com.example.demo.exceptions;

public class TeamNotFoundException extends RuntimeException {
    public TeamNotFoundException(Integer teamId) {
        super("Couldn't find team with id " + teamId);
    }
}
