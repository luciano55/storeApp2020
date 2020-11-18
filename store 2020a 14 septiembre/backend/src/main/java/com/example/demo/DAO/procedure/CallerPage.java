package com.example.demo.DAO.procedure;

import java.sql.SQLException;
import java.sql.CallableStatement;
import java.sql.Types;

import com.example.demo.DAO.GetConnectionMySql;

public class CallerPage extends GetConnectionMySql {

  public CallerPage() throws SQLException, ClassNotFoundException {
    super();
  }

  public String getPage(String pageName) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call GetPage(?, ?)}");

    cstmt.setString(1, pageName);
    cstmt.registerOutParameter(2, Types.VARCHAR);

    cstmt.execute();

    return cstmt.getString(2);
  }

  public String addVisit(String pageName) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call AddVisit(?, ?)}");

    cstmt.setString(1, pageName);
    cstmt.registerOutParameter(2, Types.VARCHAR);
    cstmt.execute();

    return cstmt.getString(2);
  }

  public int getCountVisit(String pageName) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call GetCountVisit(?, ?)}");

    cstmt.setString(1, pageName);
    cstmt.registerOutParameter(2, Types.INTEGER);
    cstmt.execute();

    return cstmt.getInt(2);
  }

}
