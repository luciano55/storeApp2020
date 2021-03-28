package com.example.demo.validate.validable.regexp;

//import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegularExpressionValidation {

  protected Boolean validate(String value, String patron) {

    // Pattern pattern = Pattern.compile(patron);

    // Matcher matcher = pattern.matcher(value);
    return Pattern.matches(patron, value);

    // return matcher.matches();

  }
}
