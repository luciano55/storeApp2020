package com.example.demo.DAO;

import java.sql.Connection;
import java.sql.SQLException;

import com.example.demo.DAO.accessDB.AccessMysql;

public class GetConnectionMySql {
  private AccessMysql accessMysql;
  protected Connection connection = null;

  protected GetConnectionMySql() throws SQLException, ClassNotFoundException {
    accessMysql = AccessMysql.instance("mobile_store_2021_view", "root", "");
    connection = accessMysql.getConnection();
  }
}
