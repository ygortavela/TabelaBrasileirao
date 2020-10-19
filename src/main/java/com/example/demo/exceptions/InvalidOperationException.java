package com.example.demo.exceptions;

public class InvalidOperationException extends RuntimeException{
    public InvalidOperationException() {
        super("It has had two teams related with this match already or you are trying to use the same team on the same match.");
    }
}
