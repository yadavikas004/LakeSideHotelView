package com.dailycodework.lakesidehotel.exception;

import java.sql.SQLException;

public class InternalServerErrorException extends RuntimeException {
    public InternalServerErrorException(String message) {
        super(message);
    }
}
