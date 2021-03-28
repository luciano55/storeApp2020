package com.example.demo.validate.validable.regexp;

import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.validable.ValidableValue;

public class LandlineFranceValidate extends RegularExpressionValidation implements ValidableValue {
  public static final String VALIDATE_NAME = "landlineSpainValidate";
  private final String PATRON = "^(\\\\+33|0033|33)?[1-9](\\d{2}){4}$"; // "^(\\+34|0034|34)?[6789]\\d{8}$"
                                                                        // "^\\(?(\\d{3})\\)?[- ]?(\\d{3})[-
                                                                        // ]?(\\d{4})$" ;

  @Override
  public ErrorValidate validate(String string) {

    if (super.validate(string.trim(), PATRON))
      return ErrorValidate.ERROR_NULL;
    else
      return ErrorValidate.ERROR_PHONE_LANDLINE;
  }

  @Override
  public String getValidateName() {
    return VALIDATE_NAME;
  }
}
