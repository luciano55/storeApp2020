package com.example.demo.model.business;

import java.sql.Connection;
import java.sql.SQLException;

import com.example.demo.model.accessDB.AccessMysql;

public class GetConnectionMySql {
  private AccessMysql accessMysql;
  protected Connection connection = null;

  GetConnectionMySql() throws SQLException, ClassNotFoundException {
    accessMysql = AccessMysql.instance("mobile_store_2021_view", "root", "");
    connection = accessMysql.getConnection();
  }
}
