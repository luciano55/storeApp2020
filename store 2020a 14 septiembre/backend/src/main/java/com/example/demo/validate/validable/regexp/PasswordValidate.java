package com.example.demo.validate.validable.regexp;

import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.validable.ValidableValue;

public class PasswordValidate extends RegularExpressionValidation implements ValidableValue {
  public static final String VALIDATE_NAME = "passwordValidate";

  // Minimo 9 caracteres y Maximo 15
  // Al menos una letra mayúscula y Al menos una letra minucula
  // Al menos un dígito y Al menos 1 caracter especial
  // No espacios en blanco
  private final String PATRON = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!-_%*?&])[A-Za-z\\d$@$!-_%*?&]{8,15}[\\S]$";

  @Override
  public ErrorValidate validate(String string) {
    if (super.validate(string, PATRON))
      return ErrorValidate.ERROR_NULL;
    else
      return ErrorValidate.ERROR_PASSWORD;
  }

  @Override
  public String getValidateName() {
    return VALIDATE_NAME;
  }
}
