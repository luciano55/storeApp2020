package com.example.demo.service;

import java.util.Collection;

import com.example.demo.entity.ShoppingCartDTO;

public interface ShoppingCartProcedureService {

  public Collection<ShoppingCartDTO> getCartList();

  public Collection<ShoppingCartDTO> getCartClient(int id);

  public Collection<ShoppingCartDTO> getCartClientProduct(int idClient, int idProduct);

  public float getCartClientProductAmount(int idClient, int idProduct);

  public String managerThePurchase(int idClient);

}
