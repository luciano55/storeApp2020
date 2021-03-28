package com.example.demo.validate.validable.validable;

import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.validable.ValidableValue;

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
