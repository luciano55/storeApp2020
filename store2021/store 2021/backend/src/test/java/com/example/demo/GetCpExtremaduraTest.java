package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.sql.SQLException;

import com.example.demo.DAO.procedure.CallerPostalCode;

import org.junit.jupiter.api.Test;

import net.minidev.json.JSONArray;

public class GetCpExtremaduraTest {
  @Test
  public void validar() throws ClassNotFoundException, SQLException {
    CallerPostalCode callerPostalCode = new CallerPostalCode();
    JSONArray cpsJson = new JSONArray();
    cpsJson = callerPostalCode.getPostalCodeExtremadura();
    System.out.println(cpsJson);
    boolean a = true;
    // System.out.println(cpsJson);
    assertEquals(true, a);
  }

}
