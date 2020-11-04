package com.example.demo.validate;

import com.example.demo.error.ErrorValidate;

public class NotFoundValidate implements ValidableValue {
  private static final String COMMAND_NAME = "NOT FOUND";

  @Override
  public String getValidateName() {
    return COMMAND_NAME;
  }

  @Override
  public ErrorValidate validate(String string) {
    return ErrorValidate.ERROR_VALIDATE_NOT_FOUND;

  }
}
