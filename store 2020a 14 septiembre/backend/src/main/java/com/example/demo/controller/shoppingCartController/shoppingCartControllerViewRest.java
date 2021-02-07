package com.example.demo.controller.shoppingCartController;

import com.example.demo.entity.ShoppingCartDTO;
import com.example.demo.entity.ShoppingCartView;
import com.example.demo.model.ShoppingCartDTORepository;
import com.example.demo.model.ShoppingCartViewRepository;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Collection;

@RestController
public class shoppingCartControllerViewRest {
  @Autowired
  private ShoppingCartViewRepository repositoryCartView;
  @Autowired
  private ShoppingCartDTORepository repositoryCart;

  @GetMapping("/shopingCartsView")
  public Collection<ShoppingCartView> getAllProduct(ShoppingCartViewRepository shopingCartViewRepository) {
    return repositoryCartView.findAll();
  }

  @GetMapping("/shopingCartsView/{idclient}")
  public Collection<ShoppingCartView> getAllProductClient(@PathVariable Integer idclient) {
    return repositoryCartView.findByidclient(idclient);
  }

  @GetMapping("/shopingCarts")
  public Collection<ShoppingCartDTO> getAllProductSC(ShoppingCartDTO shoppingCartDTO) {
    return repositoryCart.findAll();
  }

  @GetMapping("/shopingCarts/{idClient}")
  public Collection<ShoppingCartDTO> getAllProductCliente(@PathVariable int idClient) {
    return repositoryCart.findByIdclient(idClient);
  }

  @PostMapping("/shopingCarts")
  public String addShoppingCarts(@RequestBody ShoppingCartDTO shoppingCartDTO) {
    repositoryCart.save(shoppingCartDTO);
    return "http://localhost:8085/shopingCarts/" + shoppingCartDTO.getIdproduct();
  }

  @PutMapping("/shopingCarts")
  public String updateShoppingCarts(@RequestBody ShoppingCartDTO shoppingCartDTO) {
    repositoryCart.save(shoppingCartDTO);
    return "http://localhost:8085/shopingCarts/" + shoppingCartDTO.getIdproduct();
  }

  @DeleteMapping("/shopingCarts/{idClient}/{idProduct}")
  public void deleteShoppingCarts(@PathVariable int idClient, @PathVariable int idProduct) {

    repositoryCart.deleteByIdclientAndIdproduct(idClient, idProduct);

  }

}
