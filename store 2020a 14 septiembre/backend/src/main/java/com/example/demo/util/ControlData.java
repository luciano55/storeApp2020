package com.example.demo.util;

public enum ControlData {

  CONTROLDATA_FIRSTNAME(1, "nameClient"), CONTROLDATA_LASTNAME(2, "surnameClient"), CONTROLDATA_NIF(3, "nifClient"),
  CONTROLDATA_MOBILE(4, "mobileClient"), CONTROLDATA_EMAIL(5, "emailClient"),
  CONTROLDATA_BIRTHDATE(6, "birthdateClient"), CONTROLDATA_CP(7, "postalCodeClient"),
  CONTROLDATA_ADRESS(8, "clientAddress");

  private int id;
  private String msg;

  ControlData(int id, String msg) {
    this.id = id;
    this.msg = msg;
  }

  public int getId() {
    return id;
  }

  public String getMsg() {
    return msg;
  }
}
