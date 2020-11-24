package com.example.demo.verify;

import java.sql.SQLException;
import java.util.HashMap;

import com.example.demo.DAO.procedure.CallerClient;
import com.example.demo.entity.Login;
import com.example.demo.error.ErrorVerify;

public class VerifyLoginClient {
  CallerClient callerClient = null;
  Login login;

  public VerifyLoginClient(Login login) throws ClassNotFoundException, SQLException {
    callerClient = new CallerClient();
    this.login = login;
  }

  public HashMap<String, ErrorVerify> verify() throws SQLException {
    HashMap<String, ErrorVerify> errors = new HashMap<String, ErrorVerify>();
    if (!callerClient.checkingLoginClient(login)) {
      errors.put(login.getUser(), ErrorVerify.BADLOGIN);
      errors.put(login.getPassword(), ErrorVerify.BADLOGIN);
    }
    return errors;
  }
}
