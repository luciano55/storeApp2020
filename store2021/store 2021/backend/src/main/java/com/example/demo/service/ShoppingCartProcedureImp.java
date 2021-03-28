package com.example.demo.service;

import java.util.Collection;

import com.example.demo.entity.ShoppingCartDTO;
import com.example.demo.model.ShoppingCartDTOProcedureRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShoppingCartProcedureImp implements ShoppingCartProcedureService {
  @Autowired
  private ShoppingCartDTOProcedureRepository repositoryCart;

  @Override
  public Collection<ShoppingCartDTO> getCartList() {

    return repositoryCart.cartList();
  }

  @Override
  public Collection<ShoppingCartDTO> getCartClient(int id) {

    return repositoryCart.cartClient(id);
  }

  @Override
  public Collection<ShoppingCartDTO> getCartClientProduct(int idClient, int idProduct) {

    return repositoryCart.cartClientProduct(idClient, idProduct);
  }

  @Override
  public float getCartClientProductAmount(int idClient, int idProduct) {

    return repositoryCart.cartClientProductAmount(idClient, idProduct);
  }

  @Override
  public String managerThePurchase(int idClient) {

    return repositoryCart.managerThePurchase(idClient);
  }
}
