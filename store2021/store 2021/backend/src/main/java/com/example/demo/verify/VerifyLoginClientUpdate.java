package com.example.demo.verify;

import java.sql.SQLException;
import java.util.HashMap;

import com.example.demo.DAO.procedure.CallerClient;
import com.example.demo.entity.Login;
import com.example.demo.error.ErrorVerify;

public class VerifyLoginClientUpdate {
  CallerClient callerClient = null;
  Login login;
  int idClient;

  public VerifyLoginClientUpdate(Login login, int idClient) throws ClassNotFoundException, SQLException {
    callerClient = new CallerClient();
    this.login = login;
    this.idClient = idClient;
  }

  public HashMap<String, ErrorVerify> verify() throws SQLException {

    HashMap<String, ErrorVerify> errors = new HashMap<String, ErrorVerify>();
    if (callerClient.checkingLoginClientUpdate(this.login, this.idClient)) {
      errors.put(login.getUser(), ErrorVerify.BADLOGIN);
      errors.put(login.getPassword(), ErrorVerify.BADLOGIN);
    }
    return errors;
  }
}
