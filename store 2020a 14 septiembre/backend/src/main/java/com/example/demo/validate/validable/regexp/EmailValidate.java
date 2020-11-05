package com.example.demo.validate.validable.regexp;

import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.validable.ValidableValue;

public class EmailValidate extends RegularExpressionValidation implements ValidableValue {
  public static final String VALIDATE_NAME = "emailValidate";
  private final String PATRON = "^[(a-zA-Z-0-9-\\_\\+\\.)]+@[(a-z-A-z)]+\\.[(a-zA-z)]{2,3}$"; // "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
                                                                                              // //"^[_a-z0-9-]+(\\\\.[_a-z0-9-]+)*@[a-z0-9-]+(\\\\.[a-z0-9-]+)*(\\\\.[a-z]{2,4})$";

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
