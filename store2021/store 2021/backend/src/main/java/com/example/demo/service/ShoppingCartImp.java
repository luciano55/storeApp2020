package com.example.demo.service;

import com.example.demo.model.ShoppingCartDTORepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.ShoppingCartDTO;
import java.util.Collection;

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

  public Void deleteProductShoppingCarts(int idClient, int idProduct) {
    repositoryCart.deleteByIdclientAndIdproduct(idClient, idProduct);
    return null;
  }

  public Void deleteShoppingCartsClient(int idClient) {

    System.out.println("idClient Service: " + idClient);
    repositoryCart.deleteByIdclient(idClient);
    System.out.println("idClient After Service: " + idClient);
    return null;
  }

  @Override
  public String shopCart(int id) {

    return repositoryCart.shopCart(26);
  }

  @Override
  public Collection<ShoppingCartDTO> getCartList() {
    return repositoryCart.cartList();
  }

}
