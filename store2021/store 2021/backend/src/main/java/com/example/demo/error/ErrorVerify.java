package com.example.demo.error;

public enum ErrorVerify {

  EMAILEXITS(5, "Ya existe el EMAIL", "The EMAIL already exists"),
  NIFEXITS(6, "Ya existe el NIF", "The NIF already exists"),
  USEREXITS(7, "Ya existe el USER", "The USER already exists"),
  PASSWORDEXITS(8, "Ya existe la Password", "The PASSWORD already exists"),
  POSTALCODENOTEXIST(9, "NO existe el código postal", "The postalcode not exist"),
  MOBILEEXIST(10, "Ya existe ese móvil", "The mobile not exist"), BADLOGIN(11, "Login erróneol", "Login Error"),
  NIFNOTEXITS(12, "No existe el NIF", "The NIF not exists"),
  EAMILNOTEXITS(13, "No existe el Email", "The Email not exists");

  private final int id;
  private final String msgEs;
  private final String msgEn;

  ErrorVerify(int id, String msgEs, String msgEn) {
    this.id = id;
    this.msgEs = msgEs;
    this.msgEn = msgEn;
  }

  public int getId() {
    return id;
  }

  public String getMsgEs() {
    return msgEs;
  }

  public String getMsgEn() {
    return msgEn;
  }
}
