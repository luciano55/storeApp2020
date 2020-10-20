package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.sql.SQLException;

import com.example.demo.model.business.CallerPostalCode;

import org.junit.jupiter.api.Test;

import net.minidev.json.JSONArray;

public class GetCpExtremaduraTest {
  @Test
  public void validar() throws ClassNotFoundException, SQLException {
    CallerPostalCode callerPostalCode = new CallerPostalCode();
    JSONArray cpsJson = new JSONArray();
    cpsJson = callerPostalCode.getPostalCodeExtremadura();
    System.out.println("test");
    boolean a = false;
    // System.out.println(cpsJson);
    assertEquals(true, a);
  }

}
