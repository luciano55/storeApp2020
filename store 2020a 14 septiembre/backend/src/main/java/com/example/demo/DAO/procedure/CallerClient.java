package com.example.demo.DAO.procedure;

import java.sql.CallableStatement;
import java.sql.SQLException;
import java.sql.Types;
import java.util.UUID;

import com.example.demo.DAO.GetConnectionMySql;
import com.example.demo.entity.Client;
import com.example.demo.entity.Credential;
import com.example.demo.entity.IpLocation;
import com.example.demo.entity.Login;

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

  public Login getLoginInit(String email) throws SQLException {
    Login login = new Login();
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call 	GetLoginInit(?, ?, ?)}");
    cstmt.setString(1, email);
    cstmt.registerOutParameter(2, Types.VARCHAR);
    cstmt.registerOutParameter(3, Types.VARCHAR);
    cstmt.execute();
    login.setUser(cstmt.getString(2));
    login.setPassword(cstmt.getString(3));
    return login;
  }

  public Boolean checkingLoginClient(Login login) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call CheckingLoginClient(?, ?, ?)}");
    cstmt.setString(1, login.getUser());
    cstmt.setString(2, login.getPassword());
    cstmt.registerOutParameter(3, Types.BOOLEAN);
    cstmt.execute();
    return cstmt.getBoolean(3);
  }

  public String getEmailFromUser(String user) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call GetEmailFromUser(?, ?)}");
    cstmt.setString(1, user);
    cstmt.registerOutParameter(2, Types.VARCHAR);
    cstmt.execute();
    return cstmt.getString(2);
  }

  public Integer getIdClientFromUser(String user) throws SQLException {

    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call GetIdClientFromUser(?, ?)}");
    cstmt.setString(1, user);
    cstmt.registerOutParameter(2, Types.INTEGER);
    cstmt.execute();
    return cstmt.getInt(2);
  }

  public Boolean blockUser(Integer idClient) throws SQLException {
    String uuid = UUID.randomUUID().toString();
    String clave = uuid.substring(0, Math.min(uuid.length(), 50));
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call BlockUser(?, ?, ?)}");
    cstmt.setInt(1, idClient);
    cstmt.setString(2, clave);
    cstmt.registerOutParameter(3, Types.BOOLEAN);
    cstmt.execute();
    return cstmt.getBoolean(3);
  }

  public Boolean isBlocked(Integer idClient) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call ClientIsBlocked(?, ?)}");
    cstmt.setInt(1, idClient);
    cstmt.registerOutParameter(2, Types.BOOLEAN);
    cstmt.execute();
    return cstmt.getBoolean(2);
  }

  public String getLockKey(String email) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call GetLockKey(?, ?)}");
    cstmt.setString(1, email);
    cstmt.registerOutParameter(2, Types.VARCHAR);
    cstmt.execute();
    return cstmt.getString(2);
  }

  public Boolean unlockUser(String email, String key) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call UnlockUser(?, ?, ?)}");
    cstmt.setString(1, email);
    cstmt.setString(2, key);
    cstmt.registerOutParameter(3, Types.BOOLEAN);
    cstmt.execute();
    return cstmt.getBoolean(3);
  }

  public Boolean checkingCredential(Credential credential) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call CheckingCredentialClient(?, ?, ?)}");
    cstmt.setString(1, credential.getNif());
    cstmt.setString(2, credential.getEmail());
    cstmt.registerOutParameter(3, Types.BOOLEAN);
    cstmt.execute();
    return cstmt.getBoolean(3);
  }

  public Boolean updateCredential(String nif) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call UpdateCredential(?, ?)}");
    cstmt.setString(1, nif);
    cstmt.registerOutParameter(2, Types.BOOLEAN);
    cstmt.execute();
    return cstmt.getBoolean(2);
  }

  public Boolean addIpLocation(IpLocation ipLocation) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call AddIpLocation(?, ?, ?, ?, ?)}");
    cstmt.setString(1, ipLocation.getIdClient());
    cstmt.setString(2, ipLocation.getIp());
    cstmt.setString(3, ipLocation.getCity());
    cstmt.setString(4, ipLocation.getCountry());
    cstmt.registerOutParameter(5, Types.BOOLEAN);
    cstmt.execute();
    return cstmt.getBoolean(5);
  }

  public int getIdClient(String nif) throws SQLException {
    CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call GetIdClient(?, ?)}");
    cstmt.setString(1, nif);
    cstmt.registerOutParameter(2, Types.INTEGER);
    cstmt.execute();
    return cstmt.getInt(2);
  }

}
