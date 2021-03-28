package com.example.demo.service;

import java.util.Collection;

import com.example.demo.entity.ShoppingCartView;

public interface ShoppingCartViewService {
  public Collection<ShoppingCartView> getAllProduct();

  public Collection<ShoppingCartView> getAllProductClient(Integer idClient);

}
