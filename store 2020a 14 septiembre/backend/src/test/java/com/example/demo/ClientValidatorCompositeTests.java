package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.HashMap;

import com.example.demo.entity.Client;
import com.example.demo.validate.ClientValidatorComposite;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ClientValidatorCompositeTests {

  ClientValidatorComposite clientValidatorComposite = new ClientValidatorComposite();
  HashMap<String, ArrayList<String>> listValidateClient = new HashMap<String, ArrayList<String>>();

  Client client = new Client("nameClient", "surnameClient", "nifClient", "mobileClient", "birthd", "posta",
      "clientAddress");

  @Test
  void countValidator() {
    System.out.println("hola");

    System.out.println(client.getNameClient());
    // listValidateClient = clientValidatorComposite.validate(client);
    System.out.println(listValidateClient.size());
    assertEquals(6, listValidateClient.size());
  }
}
