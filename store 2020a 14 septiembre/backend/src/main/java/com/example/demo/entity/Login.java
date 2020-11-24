package com.example.demo.entity;

public class Login implements SuperClient {

  String user;
  String password;

  public Login() {

  }

  public Login(String user, String password) {
    this.user = user;
    this.password = password;

  }

  public void setUser(String user) {
    this.user = user;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getUser() {
    return user;
  }

  public String getPassword() {
    return password;
  }
}
