package com.example.demo.verify;

import java.sql.SQLException;
import java.util.HashMap;

import com.example.demo.DAO.procedure.CallerClient;
import com.example.demo.entity.Client;
import com.example.demo.error.ErrorVerify;

public class VerifyClient {
  CallerClient callerClient = null;
  Client client;

  public VerifyClient(Client client) throws ClassNotFoundException, SQLException {
    callerClient = new CallerClient();
    this.client = client;
  }

  public HashMap<String, ErrorVerify> verify() throws SQLException {
    HashMap<String, ErrorVerify> errors = new HashMap<String, ErrorVerify>();

    if (callerClient.existEmail(client.getEmail())) {
      errors.put(client.getEmail(), ErrorVerify.EMAILEXITS);
    }
    if (callerClient.existNif(client.getNif())) {
      errors.put(client.getNif(), ErrorVerify.NIFEXITS);
    }
    if (!callerClient.existCP(client.getPostalCode())) {
      errors.put(client.getPostalCode(), ErrorVerify.POSTALCODENOTEXIST);
    }
    if (callerClient.existMobile(client.getMobile())) {
      errors.put(client.getMobile(), ErrorVerify.MOBILEEXIST);
    }

    return errors;

  }

}
