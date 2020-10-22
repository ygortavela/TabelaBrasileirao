package com.example.demo.exceptions;

public class MatchNotFoundException extends RuntimeException {
    public MatchNotFoundException(Integer matchId) {
        super("Couldn't find match with id " + matchId);
    }
}
