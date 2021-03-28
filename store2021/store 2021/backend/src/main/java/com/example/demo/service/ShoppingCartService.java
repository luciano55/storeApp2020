package com.example.demo.service;

import java.util.Collection;

import com.example.demo.entity.ShoppingCartDTO;

public interface ShoppingCartService {

  public Collection<ShoppingCartDTO> getAllProductSC();

  public Collection<ShoppingCartDTO> getAllProductCliente(int idClient);

  public String addShoppingCarts(ShoppingCartDTO shoppingCartDTO);

  public String updateShoppingCarts(ShoppingCartDTO shoppingCartDTO);

  public Void deleteProductShoppingCarts(int idClient, int idProduct);

  public Void deleteShoppingCartsClient(int idClient);

  public String shopCart(int id);

  public Collection<ShoppingCartDTO> getCartList();

}
