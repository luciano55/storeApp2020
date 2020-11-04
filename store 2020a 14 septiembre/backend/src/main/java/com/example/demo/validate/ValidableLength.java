package com.example.demo.validate;

import com.example.demo.error.ErrorValidate;

public interface ValidableLength extends Validable {

  ErrorValidate validate(String string, int min, int max);

}
