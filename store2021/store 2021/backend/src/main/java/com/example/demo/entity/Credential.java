package com.example.demo.entity;

public class Credential implements SuperClient {

  String nif;
  String email;

  public Credential() {

  }

  public Credential(String nif, String email) {
    this.nif = nif;
    this.email = email;
  }

  public void setNif(String nif) {
    this.nif = nif;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getNif() {
    return this.nif;
  }

  public String getEmail() {
    return email;
  }
}
