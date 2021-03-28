package com.example.demo.validate.validable.regexp;

import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.validable.ValidableValue;

public class AddressValidate extends RegularExpressionValidation implements ValidableValue {
  public static final String VALIDATE_NAME = "addressValidate";
  private final String PATRON = "^[0-9ºª.:,/a-zA-ZñÑáéíóúÜüÁÉÍÓÚ\\s]*$";

  @Override
  public ErrorValidate validate(String string) {
    if (super.validate(string, PATRON))
      return ErrorValidate.ERROR_NULL;
    else
      return ErrorValidate.ERROR_LETTER_NUMBER;
  }

  @Override
  public String getValidateName() {
    return VALIDATE_NAME;
  }
}
