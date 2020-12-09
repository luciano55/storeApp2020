package com.example.demo.entity;

public class IpLocation {
  String idClient;
  String ip;
  String city;
  String country;

  public String getIp() {
    return this.ip;
  }

  public void setIp(String ip) {
    this.ip = ip;
  }

  public String getCity() {
    return this.city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getCountry() {
    return this.country;
  }

  public void setCountry(String Country) {
    this.country = Country;
  }

  public IpLocation(String idClient, String ip, String city, String country) {
    this.idClient = idClient;
    this.ip = ip;
    this.city = city;
    this.country = country;
  }

  public IpLocation() {
  }

  public String getIdClient() {
    return idClient;
  }

  public void setIdClient(String idClient) {
    this.idClient = idClient;
  }

}
