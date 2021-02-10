package com.example.demo.service;

import com.example.demo.model.ShoppingCartDTORepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.ShoppingCartDTO;
import java.util.Collection;
import java.net.URI;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Service
public class ShoppingCartImp implements ShoppingCartService {
  @Autowired
  private ShoppingCartDTORepository repositoryCart;

  public Collection<ShoppingCartDTO> getAllProductSC() {
    return repositoryCart.findAll();
  }

  public Collection<ShoppingCartDTO> getAllProductCliente(int idClient) {
    return repositoryCart.findByIdclient(idClient);
  }

  public String addShoppingCarts(ShoppingCartDTO shoppingCartDTO) {
    repositoryCart.save(shoppingCartDTO);
    /*
     * URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
     * .buildAndExpand(shoppingCartDTO.getIdclient()).toUri();
     */
    return "ok";
  }

  public String updateShoppingCarts(ShoppingCartDTO shoppingCartDTO) {

    repositoryCart.save(shoppingCartDTO);
    return "ok";
  }

  public Void deleteShoppingCarts(int idClient, int idProduct) {
    repositoryCart.deleteByIdclientAndIdproduct(idClient, idProduct);
    return null;
  }
}
