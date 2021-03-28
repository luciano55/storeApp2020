package com.example.demo.validate.validable;

import com.example.demo.error.ErrorValidate;

public interface ValidableValue extends Validable {
  ErrorValidate validate(String string);
}
