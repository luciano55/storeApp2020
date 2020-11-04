package com.example.demo.validate.validators;

import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.ValidableValue;

import java.util.ArrayList;

public class MobileValidate implements ValidableValue {
  public static final String VALIDATE_NAME = "mobileValidate";

  @Override
  public String getValidateName() {
    return VALIDATE_NAME;
  }

  @Override
  public ErrorValidate validate(String mobile) {
    ArrayList<ErrorValidate> errors = new ArrayList<>();
    errors.add(new MobileSpainValidate().validate(mobile));
    errors.add(new MobileFranceValidate().validate(mobile));
    errors.add(new MobileUSAValidate().validate(mobile));

    for (ErrorValidate error : errors) {
      if (error == ErrorValidate.ERROR_NULL) {
        return ErrorValidate.ERROR_NULL;
      }
    }
    return ErrorValidate.ERROR_PHONE_LANDLINE;
  }
}
