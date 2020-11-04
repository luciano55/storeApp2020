package com.example.demo.validate;

import com.example.demo.error.ErrorValidate;

public class ErrorValidator implements ValidableValue {

  private static final String VALIDATE_NAME = "ERROR EN EL PROCESO VALIDAR";

  @Override
  public String getValidateName() {
    return VALIDATE_NAME;
  }

  @Override
  public ErrorValidate validate(String string) {
    return ErrorValidate.ERROR_VALIDATE;
  }
}
