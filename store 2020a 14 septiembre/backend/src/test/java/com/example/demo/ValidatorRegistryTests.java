package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.example.demo.validate.ValidatorRegistry;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ValidatorRegistryTests {

  @Test
  void countValidator2() {
    ValidatorRegistry validatorRegistry = ValidatorRegistry.getInstance();
    System.out.println("Hola");
    System.out.println(validatorRegistry.getSizeRegistry());
    assertEquals(17, validatorRegistry.getSizeRegistry());
  }

}
