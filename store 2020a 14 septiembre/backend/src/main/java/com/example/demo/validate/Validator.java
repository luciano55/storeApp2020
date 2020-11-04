package com.example.demo.validate;

public enum Validator {
  nie("nieValidate"), nif("nifValidate"), cif("cifValidate"), letterWithSpace("lettersWithSpaceValidate"),
  cifNieNif("cifNieNifValidate"), adress("addressValidate"), size("lengthValidate"), cp("codigoPostalValidate"),
  email("emailValidate"), birthday("birthdayValidate"), landlineSpain("landlineSpainValidate"),
  landlineFrance("landlineFranceValidate"), landlineUSA("landlineUSAValidate"), landline("landlineValidate"),
  mobile("mobileValidate"), user("userValidate"), password("passwordValidate");

  private String name;

  Validator(String name) {
    this.name = name;
  }

  String getName() {
    return this.name;
  }
}
