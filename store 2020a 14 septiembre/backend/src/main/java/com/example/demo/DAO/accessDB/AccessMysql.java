package com.example.demo.DAO.accessDB;

import java.sql.*;

public class AccessMysql {
  private static AccessMysql accessMysql;
  private static Connection connection = null;

  private final String DRIVER = "com.mysql.jdbc.Driver";
  private String URL = "jdbc:mysql://localhost:3306/model?useInformationSchema=true&serverTimezone=EST5EDT";

  private static String bbdd = null;
  private static String user = null;
  private static String password = null;

  public static AccessMysql instance(String bbdd, String user, String password)
      throws SQLException, ClassNotFoundException {
    if (accessMysql != null) {
      System.out.println(user);
      if (!AccessMysql.bbdd.equals(bbdd) || !AccessMysql.user.equals(user) || !AccessMysql.password.equals(password)) {
        connection.close();
        createInstance(bbdd, user, password);
        System.out.println("change connection");
      } else {
        System.out.println("sigo connection");
      }
    } else {
      createInstance(bbdd, user, password);
      System.out.println("new connection");
    }
    return accessMysql;
  }

  private static void createInstance(String bbdd, String user, String password)
      throws ClassNotFoundException, SQLException {
    accessMysql = new AccessMysql(bbdd, user, password);
    AccessMysql.user = user;
    AccessMysql.password = password;
    AccessMysql.bbdd = bbdd;
  }

  private AccessMysql(String bbdd, String user, String password) throws ClassNotFoundException, SQLException {

    this.URL = this.URL.replace("model", bbdd);

    Class.forName(this.DRIVER);

    connection = DriverManager.getConnection(this.URL, user, password);
  }

  public Connection getConnection() {
    return connection;
  }

  public boolean check() {
    if (connection != null)
      return true;
    else
      return false;
  }

}
