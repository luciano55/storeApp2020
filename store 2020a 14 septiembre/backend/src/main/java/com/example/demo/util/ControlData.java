package com.example.demo.util;

public enum ControlData {

  CONTROLDATA_FIRSTNAME(1, "name"), CONTROLDATA_LASTNAME(2, "surname"), CONTROLDATA_NIF(3, "nif"),
  CONTROLDATA_MOBILE(4, "mobile"), CONTROLDATA_EMAIL(5, "email"), CONTROLDATA_BIRTHDATE(6, "birthdate"),
  CONTROLDATA_CP(7, "postalCode"), CONTROLDATA_ADRESS(8, "address");

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
