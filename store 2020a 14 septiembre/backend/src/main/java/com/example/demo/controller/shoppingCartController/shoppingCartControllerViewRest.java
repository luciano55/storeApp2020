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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import java.net.URI;
import java.util.Collection;

@RestController
@RequestMapping("/shopingCarts")
public class shoppingCartControllerViewRest {
  @Autowired
  private ShoppingCartViewRepository repositoryCartView;
  @Autowired
  private ShoppingCartDTORepository repositoryCart;

  @GetMapping("/View")
  public ResponseEntity<Collection<ShoppingCartView>>

      getAllProduct(ShoppingCartViewRepository shopingCartViewRepository) {
    return ResponseEntity.ok(repositoryCartView.findAll());
  }

  @GetMapping("/View/client/{idclient}")
  public ResponseEntity<Collection<ShoppingCartView>> getAllProductClient(@PathVariable Integer idclient) {
    Collection<ShoppingCartView> shoppingCartViews = repositoryCartView.findByIdclient(idclient);
    if (shoppingCartViews == null) {
      return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(shoppingCartViews);
  }

  @GetMapping
  public ResponseEntity<Collection<ShoppingCartDTO>> getAllProductSC(ShoppingCartDTO shoppingCartDTO) {
    return ResponseEntity.ok(repositoryCart.findAll());
  }

  @GetMapping("/client/{idClient}")
  public ResponseEntity<Collection<ShoppingCartDTO>> getAllProductCliente(@PathVariable int idClient) {
    return ResponseEntity.ok(repositoryCart.findByIdclient(idClient));
  }

  @PostMapping
  public ResponseEntity<String> addShoppingCarts(@RequestBody ShoppingCartDTO shoppingCartDTO) {
    repositoryCart.save(shoppingCartDTO);
    // return "http://localhost:8085/shopingCarts/" +
    // shoppingCartDTO.getIdproduct();
    URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
        .buildAndExpand(shoppingCartDTO.getIdclient()).toUri();
    return ResponseEntity.created(location).build();
  }

  @PutMapping
  public ResponseEntity<String> updateShoppingCarts(@RequestBody ShoppingCartDTO shoppingCartDTO) {
    repositoryCart.save(shoppingCartDTO);
    URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
        .buildAndExpand(shoppingCartDTO.getIdclient()).toUri();
    return ResponseEntity.created(location).build();
  }

  @DeleteMapping("/client/{idClient}/product/{idProduct}")
  public ResponseEntity<Void> deleteShoppingCarts(@PathVariable int idClient, @PathVariable int idProduct) {

    repositoryCart.deleteByIdclientAndIdproduct(idClient, idProduct);
    return ResponseEntity.ok(null);

  }

}
