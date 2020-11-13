package com.example.demo.util;

public enum DataControl {

  DATACONTROL_FIRSTNAME(1, "name"), DATACONTROL_LASTNAME(2, "surname"), DATACONTROL_NIF(3, "nif"),
  DATACONTROL_MOBILE(4, "mobile"), DATACONTROL_EMAIL(5, "email"), DATACONTROL_BIRTHDATE(6, "birthdate"),
  DATACONTROL_CP(7, "postalCode"), DATACONTROL_ADRESS(8, "address");

  private int id;
  private String msg;

  DataControl(int id, String msg) {
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
