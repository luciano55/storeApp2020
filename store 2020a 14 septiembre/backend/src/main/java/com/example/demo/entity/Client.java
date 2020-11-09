package com.example.demo.entity;

public class Client {

  private String nameClient;
  private String surnameClient;
  private String nifClient;
  private String mobileClient;
  private String mobilePrivateClient;
  private String emailClient;
  private String birthdateClient;
  private String postalCodeClient;
  private String postalCodeJobClient;
  private String clientAddress;

  public Client(String nameClient, String surnameClient, String nifClient, String mobileClient,
      String mobilePrivateClient, String birthdateClient, String postalCodeClient, String postalCodeJobClient,
      String clientAddress) {
    this.nameClient = nameClient;
    this.surnameClient = surnameClient;
    this.nifClient = nifClient;
    this.mobileClient = mobileClient;
    this.mobilePrivateClient = mobilePrivateClient;
    this.birthdateClient = birthdateClient;
    this.postalCodeClient = postalCodeClient;
    this.postalCodeJobClient = postalCodeJobClient;
    this.clientAddress = clientAddress;
  }

  public String getNameClient() {
    return nameClient;
  }

  public void setNameClient(String nameClient) {
    this.nameClient = nameClient;
  }

  public String getSurnameClient() {
    return surnameClient;
  }

  public void setSurnameClient(String surnameClient) {
    this.surnameClient = surnameClient;
  }

  public String getNifClient() {
    return nifClient;
  }

  public void setNifClient(String nifClient) {
    this.nifClient = nifClient;
  }

  public String getMobileClient() {
    return mobileClient;
  }

  public void setMobileClient(String mobileClient) {
    this.mobileClient = mobileClient;
  }

  public String getMobilePrivateClient() {
    return mobilePrivateClient;
  }

  public void setMobilePrivateClient(String mobilePrivateClient) {
    this.mobilePrivateClient = mobilePrivateClient;
  }

  public String getEmailClient() {
    return emailClient;
  }

  public void setEmailClient(String emailClient) {
    this.emailClient = emailClient;
  }

  public String getBirthdateClient() {
    return birthdateClient;
  }

  public void setBirthdateClient(String birthdateClient) {
    this.birthdateClient = emailClient;
  }

  public String getPostalCodeClient() {
    return postalCodeClient;
  }

  public void setPostalCodeClient(String postalCodeClient) {
    this.postalCodeClient = postalCodeClient;
  }

  public String getPostalCodeJobClient() {
    return postalCodeJobClient;
  }

  public void setPostalCodeJobClient(String postalCodeJobClient) {
    this.postalCodeJobClient = postalCodeJobClient;
  }

  public String getClientAddress() {
    return clientAddress;
  }

  public void setClientAddress(String clientAddress) {
    this.clientAddress = clientAddress;
  }
}
