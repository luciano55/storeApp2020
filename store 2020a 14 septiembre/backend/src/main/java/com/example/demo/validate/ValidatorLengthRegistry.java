package com.example.demo.validate;

import java.util.HashMap;

import com.example.demo.validate.validable.ValidableLength;
import com.example.demo.validate.validable.validable.ErrorValidator;
import com.example.demo.validate.validable.validable.NotFoundValidate;
import com.example.demo.validate.validable.validable.SizeValidate;

public class ValidatorLengthRegistry {
  private static ValidatorLengthRegistry validatorLengthRegistry;
  private static final HashMap<String, Class<? extends ValidableLength>> VALIDATES = new HashMap<String, Class<? extends ValidableLength>>();

  private ValidatorLengthRegistry() {
    addValidator(SizeValidate.VALIDATE_NAME, SizeValidate.class);
  }

  public void addValidator(String validateName, Class<? extends ValidableLength> validate) {
    VALIDATES.put(validateName.toUpperCase(), validate);
  }

  public ValidableLength getValidate(String validateName) {
    if (VALIDATES.containsKey(validateName.toUpperCase())) {
      try {
        return VALIDATES.get(validateName.toUpperCase()).getConstructor().newInstance();
      } catch (Exception e) {
        e.printStackTrace();
        return (ValidableLength) new ErrorValidator();
      }
    } else {
      return (ValidableLength) new NotFoundValidate();
    }
  }

  public static synchronized ValidatorLengthRegistry getInstance() {
    if (validatorLengthRegistry == null) {
      validatorLengthRegistry = new ValidatorLengthRegistry();
    }
    return validatorLengthRegistry;
  }
}
