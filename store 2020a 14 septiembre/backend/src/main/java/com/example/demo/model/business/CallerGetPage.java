package com.example.demo.model.business;

import java.sql.CallableStatement;
import java.sql.SQLException;
import java.sql.Types;

public class CallerGetPage extends GetConnectionMySql {

  public CallerGetPage() throws SQLException, ClassNotFoundException {
  }

  public String getPage(String pageName) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call getPage(?, ?)}");
    cstmt.setString(1, pageName);
    cstmt.registerOutParameter(2, Types.VARCHAR);
    cstmt.execute();
    return cstmt.getString(2);
  }
}
