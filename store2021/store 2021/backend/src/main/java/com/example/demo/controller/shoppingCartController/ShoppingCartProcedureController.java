package com.example.demo.controller.shoppingCartController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import com.example.demo.entity.ShoppingCartDTO;
import com.example.demo.service.ShoppingCartProcedureImp;

import java.util.Collection;

@RestController
@RequestMapping("/Cart")
public class ShoppingCartProcedureController {

  @Autowired
  private ShoppingCartProcedureImp shoppingCartService;

  @GetMapping("/all")
  public ResponseEntity<Collection<ShoppingCartDTO>> lista() {

    return ResponseEntity.ok(shoppingCartService.getCartList());
  }

  @GetMapping("/client/{id}")
  public ResponseEntity<Collection<ShoppingCartDTO>> cartClient(@PathVariable("id") int id) {

    return ResponseEntity.ok(shoppingCartService.getCartClient(id));
  }

  @GetMapping("/client/{idClient}/product/{idProduct}")
  public ResponseEntity<Collection<ShoppingCartDTO>> cartClientProduct(@PathVariable("idClient") int idClient,
      @PathVariable("idProduct") int idProduct) {
    return ResponseEntity.ok(shoppingCartService.getCartClientProduct(idClient, idProduct));
  }

  @GetMapping("/client/{idClient}/product/{idProduct}/amount")
  public ResponseEntity<Float> cartClientProductAmonut(@PathVariable("idClient") int idClient,
      @PathVariable("idProduct") int idProduct) {
    return ResponseEntity.ok(shoppingCartService.getCartClientProductAmount(idClient, idProduct));
  }

  @GetMapping("/managerThePurchase/{idClient}")
  public ResponseEntity<String> managerThePurchase(@PathVariable("idClient") int idClient) {
    return ResponseEntity.ok(shoppingCartService.managerThePurchase(idClient));
  }
}
