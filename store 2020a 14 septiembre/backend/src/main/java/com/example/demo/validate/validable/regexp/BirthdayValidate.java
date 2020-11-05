package com.example.demo.validate.validable.regexp;

import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.validable.ValidableValue;

public class BirthdayValidate extends RegularExpressionValidation implements ValidableValue {
  public static final String VALIDATE_NAME = "birthdayValidate";
  private final String PATRON = "^(\\d{4})(\\-)(0[1-9]|1[012])(\\-)(0[1-9]|[1-2]\\d|3[01])$";

  @Override
  public String getValidateName() {
    return VALIDATE_NAME;
  }

  @Override
  public ErrorValidate validate(String string) {
    if (super.validate(string, PATRON))
      return ErrorValidate.ERROR_NULL;
    else
      return ErrorValidate.ERROR_VALIDATE_PATTERN;
  }
}
