package com.example.demo.verify;

import java.sql.SQLException;
import java.util.HashMap;

import com.example.demo.DAO.procedure.CallerClient;
import com.example.demo.entity.Client;
import com.example.demo.error.ErrorVerify;

public class VerifyPersonClientUpdate {
  CallerClient callerClient = null;
  Client client;
  int idClient;

  public VerifyPersonClientUpdate(Client client, int idClient) throws ClassNotFoundException, SQLException {
    callerClient = new CallerClient();
    this.client = client;
    this.idClient = idClient;
  }

  public HashMap<String, ErrorVerify> verify() throws SQLException {
    HashMap<String, ErrorVerify> errors = new HashMap<String, ErrorVerify>();

    if (callerClient.existAnotherEmail(this.idClient, this.client.getEmail())) {
      errors.put(client.getEmail(), ErrorVerify.EMAILEXITS);
    }

    if (callerClient.existAnotherNif(this.idClient, client.getNif())) {
      errors.put(client.getNif(), ErrorVerify.NIFEXITS);
    }
    if (!callerClient.existCP(client.getPostalCode())) {
      errors.put(client.getPostalCode(), ErrorVerify.POSTALCODENOTEXIST);
    }
    if (callerClient.existAnotherMobile(this.idClient, client.getMobile())) {
      errors.put(client.getMobile(), ErrorVerify.MOBILEEXIST);
    }

    return errors;

  }

}
