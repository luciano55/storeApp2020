package com.example.demo.entity;

public class LoginPass implements SuperClient {

  String user;
  String password;
  String passwordrepeat;

  public LoginPass() {

  }

  public LoginPass(String user, String password, String passwordrepeat) {
    this.user = user;
    this.password = password;
    this.passwordrepeat = passwordrepeat;
  }

  public void setUser(String user) {
    this.user = user;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public void setPasswordRepeat(String passwordRepeat) {
    this.passwordrepeat = passwordRepeat;
  }

  public String getUser() {
    return this.user;
  }

  public String getPassword() {
    return this.password;
  }

  public String getPasswordRepeat() {
    return this.passwordrepeat;
  }
}
