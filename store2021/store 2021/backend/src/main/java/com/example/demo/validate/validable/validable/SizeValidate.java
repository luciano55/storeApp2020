package com.example.demo.validate.validable.validable;

import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.validable.ValidableLength;

public class SizeValidate implements ValidableLength {
  public static final String VALIDATE_NAME = "lengthValidate";

  @Override
  public ErrorValidate validate(String string, int min, int max) {
    if (string.length() >= min && string.length() <= max) {
      return ErrorValidate.ERROR_NULL;
    }
    return ErrorValidate.ERROR_SIZE;
  }

  @Override
  public String getValidateName() {
    return VALIDATE_NAME;
  }
}
