package com.example.demo.service;

public class FacturacionImp implements FacturacionService {

  public String facturar(Integer idClient) {
    String message = ManageThePurchase(idClient);
    return message;
  }

  @Override
  public String ManageThePurchase(Integer idClient) {
    // TODO Auto-generated method stub
    return null;
  }

  /*
   * @Override public String ManageThePurchase(Integer idClient) { String message
   * = ManageThePurchase(idClient); return message; }
   */

}
