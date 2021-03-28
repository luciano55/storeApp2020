package com.example.demo.validate.validable.validable;

import java.util.regex.Pattern;

import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.validable.ValidableValue;

public class DateValidate implements ValidableValue {
  public static final String VALIDATE_NAME = "dateValidate";
  private static final Pattern datePattern = Pattern.compile(
      "^(?:(?:31([/\\-.])(?:0?[13578]|1[02]))\\1|(?:(?:29|30)([/\\-.])(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])([/\\-.])(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$");

  @Override
  public ErrorValidate validate(String date) {
    System.out.println(date);
    String fecha = ordenarFecha(date);
    if (!datePattern.matcher(fecha).matches()) {
      return ErrorValidate.ERROR_DATE_FULL;
    }
    return ErrorValidate.ERROR_NULL;
  }

  @Override
  public String getValidateName() {
    return VALIDATE_NAME;
  }

  private String ordenarFecha(String date) {
    String auxiliar = "";
    String division[] = date.split("-");
    auxiliar = division[2] + "-" + division[1] + "-" + division[0];
    return auxiliar;
  }
}
