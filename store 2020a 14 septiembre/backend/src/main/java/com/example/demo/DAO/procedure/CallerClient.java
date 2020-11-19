package com.example.demo.DAO.procedure;

import java.sql.CallableStatement;
import java.sql.SQLException;
import java.sql.Types;

import com.example.demo.DAO.GetConnectionMySql;
import com.example.demo.entity.Client;

public class CallerClient extends GetConnectionMySql {

  public CallerClient() throws SQLException, ClassNotFoundException {
    super();
  }

  public Boolean existEmail(String email) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call 	EmailExist_client(?, ?)}");
    cstmt.setString(1, email);
    cstmt.registerOutParameter(2, Types.BOOLEAN);
    cstmt.execute();
    return cstmt.getBoolean(2);
  }

  public Boolean existNif(String nif) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call 	NifExist_client(?, ?)}");
    cstmt.setString(1, nif);
    cstmt.registerOutParameter(2, Types.BOOLEAN);
    cstmt.execute();
    return cstmt.getBoolean(2);
  }

  public Boolean existCP(String cp) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call 	CPExist_postalcode(?, ?)}");
    cstmt.setString(1, cp);
    cstmt.registerOutParameter(2, Types.BOOLEAN);
    cstmt.execute();
    return cstmt.getBoolean(2);
  }

  public Boolean existMobile(String cp) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call 	MobileExist_client(?, ?)}");
    cstmt.setString(1, cp);
    cstmt.registerOutParameter(2, Types.BOOLEAN);
    cstmt.execute();
    return cstmt.getBoolean(2);
  }

  public Boolean addClient(Client client) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call AddClient(?,?,?,?,?,?,?,?,?)}");
    cstmt.setString(1, client.getName());
    cstmt.setString(2, client.getSurname());
    cstmt.setString(3, client.getNif());
    cstmt.setString(4, client.getMobile());
    cstmt.setString(5, client.getEmail());
    cstmt.setString(6, client.getBirthdate());
    cstmt.setString(7, client.getPostalCode());
    cstmt.setString(8, client.getAddress());
    cstmt.registerOutParameter(9, Types.BOOLEAN);
    cstmt.execute();
    return cstmt.getBoolean(9);
  }

}
