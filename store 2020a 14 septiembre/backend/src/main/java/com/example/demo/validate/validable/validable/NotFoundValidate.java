package com.example.demo.validate.validable.validable;

import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.validable.ValidableValue;

public class NotFoundValidate implements ValidableValue {
  private static final String COMMAND_NAME = "NOT FOUND";

  @Override
  public String getValidateName() {
    return COMMAND_NAME;
  }

  @Override
  public ErrorValidate validate(String string) {
    return ErrorValidate.ERROR_VALIDATOR_NOT_FOUND;

  }
}
