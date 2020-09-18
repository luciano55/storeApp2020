package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.sql.SQLException;

import com.example.demo.model.accessDB.AccessMysql;

import org.junit.jupiter.api.Test;

public class AccessMysqlTest {
  AccessMysql accessMysql;

  @Test
  public void validar() {

    try {
      accessMysql = AccessMysql.instance("mobile_store_2021", "root", "");

    } catch (ClassNotFoundException | SQLException e) {

      e.printStackTrace();
    }
    assertEquals(true, accessMysql.check());
  }

}
