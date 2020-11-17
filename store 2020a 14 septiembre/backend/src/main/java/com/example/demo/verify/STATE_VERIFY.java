package com.example.demo.verify;

public enum STATE_VERIFY {

  EMAILEXITS(5, "Ya existe el EMAIL", "The EMAIL already exists"),
  NIFEXITS(6, "Ya existe el NIF", "The NIF already exists"),
  USEREXITS(7, "Ya existe el USER", "The USER already exists"),
  PASSWORDEXITS(8, "Ya existe la Password", "The PASSWORD already exists");

  private final int id;
  private final String msgEs;
  private final String msgEn;

  STATE_VERIFY(int id, String msgEs, String msgEn) {
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
