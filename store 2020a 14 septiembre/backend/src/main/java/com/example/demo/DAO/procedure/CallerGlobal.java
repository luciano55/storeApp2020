package com.example.demo.DAO.procedure;

import java.sql.Connection;
import java.sql.SQLException;

import com.example.demo.DAO.accessDB.AccessMysql;

public class CallerGlobal {
  private AccessMysql accessMysql;
  protected Connection connection = null;

  public CallerGlobal() throws SQLException, ClassNotFoundException {
    accessMysql = AccessMysql.instance("storemobile2019vista", "root", "");
    connection = accessMysql.getConnection();
  }
}
