package com.example.demo.validate;

public enum Validator {
  nie("nieValidate"), nif("nifValidate"), cif("cifValidate"), letterWithSpace("lettersWithSpaceValidate"),
  cifNieNif("cifNieNifValidate"), address("addressValidate"), size("lengthValidate"), cp("codigoPostalValidate"),
  email("emailValidate"), birthdate("birthdayValidate"), landlineSpain("landlineSpainValidate"),
  landlineFrance("landlineFranceValidate"), landlineUSA("landlineUSAValidate"), landline("landlineValidate"),
  mobile("mobileValidate"), mobileFrance("mobileFranceValidate"), mobileUSA("mobileUSAValidate"),
  mobileSpain("mobileSpainValidate"), user("userValidate"), password("passwordValidate");

  private String name;

  Validator(String name) {
    this.name = name;
  }

  String getName() {
    return this.name;
  }
}
