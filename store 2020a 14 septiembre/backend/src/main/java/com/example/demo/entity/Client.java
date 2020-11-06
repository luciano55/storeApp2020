package com.example.demo.entity;

public class Client {
  private String nif;
  private String firstname;
  private String lastname;
  private String address;
  // private String cp;
  private String birthdate;
  // private String mobile;
  private String email;

  public Client(String nif, String firstName, String lastName, String address, String birthdate, String email) {
    this.nif = nif;
    this.firstname = firstName;
    this.lastname = lastName;
    this.address = address;
    // this.cp = cp;
    this.birthdate = birthdate;
    // this.mobile = mobile;
    this.email = email;
  }

  public String getNif() {
    return nif;
  }

  public void setNif(String nif) {
    this.nif = nif;
  }

  public String getFirstName() {
    return firstname;
  }

  public void setFirstName(String firstName) {
    this.firstname = firstName;
  }

  public String getLastName() {
    return lastname;
  }

  public void setLastName(String lastName) {
    this.lastname = lastName;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String adress) {
    this.address = adress;
  }

  /*
   * public String getCp() { return cp; }
   * 
   * public void setCp(String cp) { this.cp = cp; }
   */
  public String getBirthdate() {
    return birthdate;
  }

  public void setBirthdate(String birthday) {
    this.birthdate = birthday;
  }

  /*
   * public String getMobile() { return mobile; }
   * 
   * public void setMobile(String mobile) { this.mobile = mobile; }
   */
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

}
