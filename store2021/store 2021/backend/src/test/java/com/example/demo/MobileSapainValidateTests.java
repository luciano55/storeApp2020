package com.example.demo;

import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.validable.regexp.MobileSpainValidate;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class MobileSapainValidateTests {
  MobileSpainValidate mobileSpainValidate = new MobileSpainValidate();
  ErrorValidate errorValidate;

  @Test
  void validator() {

    System.out.println("hola");
    errorValidate = mobileSpainValidate.validate("+34-685200494");
    System.out.println(errorValidate.getMsgEs());
  }
}
