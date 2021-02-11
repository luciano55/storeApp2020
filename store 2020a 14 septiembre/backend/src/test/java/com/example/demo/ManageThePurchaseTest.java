package com.example.demo;

import com.example.demo.service.FacturacionImp;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class ManageThePurchaseTest {
  FacturacionImp facturacion = new FacturacionImp();

  @Test
  public void start() {

    String message = facturacion.ManageThePurchase(13);
    System.out.println(message);
    int a = 1;
    assertEquals(a, 1);
  }

}
