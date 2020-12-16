package com.example.demo.verify;

import java.sql.SQLException;
import java.util.HashMap;

import com.example.demo.DAO.procedure.CallerClient;
import com.example.demo.entity.Credential;
import com.example.demo.error.ErrorVerify;

public class VerifyCredentialClient {
  CallerClient callerClient = null;
  Credential credential;

  public VerifyCredentialClient(Credential credential) throws ClassNotFoundException, SQLException {
    callerClient = new CallerClient();
    this.credential = credential;
  }

  public HashMap<String, ErrorVerify> verify() throws SQLException {
    HashMap<String, ErrorVerify> errors = new HashMap<String, ErrorVerify>();
    if (!callerClient.checkingCredential(credential)) {
      errors.put(credential.getNif(), ErrorVerify.NIFNOTEXITS);
      errors.put(credential.getEmail(), ErrorVerify.EAMILNOTEXITS);
    }
    return errors;
  }
}
