package com.example.demo.validate.validable.regexp;

import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.validable.ValidableValue;

public class UserValidate extends RegularExpressionValidation implements ValidableValue {
  public static final String VALIDATE_NAME = "userValidate";
  // Los usuarios tienen 7 dígitos.
  // El primer dígito es una letra.
  // Los dígitos 2 y 3 pueden ser letras o números.
  // Los 4 últimos son números.

  private final String PATRON = "^[A-Za-z]{1}([A-Za-z]{2}|[0-9]{2}|[A-Za-z][0-9]{2})([0-9]{4})$";

  @Override
  public ErrorValidate validate(String string) {
    if (super.validate(string, PATRON))
      return ErrorValidate.ERROR_NULL;
    else
      return ErrorValidate.ERROR_USER;
  }

  @Override
  public String getValidateName() {
    return VALIDATE_NAME;
  }
}
