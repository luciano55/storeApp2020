package com.example.demo.entity;

public class Client {

  private String name;
  private String surname;
  private String nif;
  private String mobile;
  private String email;
  private String birthdate;
  private String postalCode;
  private String address;

  public Client(String name, String surname, String nif, String mobile, String birthdate, String postalCode,
      String address) {
    this.name = name;
    this.surname = surname;
    this.nif = nif;
    this.mobile = mobile;
    this.birthdate = birthdate;
    this.postalCode = postalCode;
    this.address = address;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getSurname() {
    return surname;
  }

  public void setSurnameClient(String surname) {
    this.surname = surname;
  }

  public String getNif() {
    return nif;
  }

  public void setNifClient(String nif) {
    this.nif = nif;
  }

  public String getMobile() {
    return mobile;
  }

  public void setMobile(String mobile) {
    this.mobile = mobile;
  }

  public String getEmail() {
    return email;
  }

  public void setEmailClient(String email) {
    this.email = email;
  }

  public String getBirthdate() {
    return birthdate;
  }

  public void setBirthdate(String birthdate) {
    this.birthdate = birthdate;
  }

  public String getPostalCode() {
    return postalCode;
  }

  public void setPostalCode(String postalCode) {
    this.postalCode = postalCode;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }
}
