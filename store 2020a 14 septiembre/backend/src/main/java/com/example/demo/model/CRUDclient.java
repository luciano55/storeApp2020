package com.example.demo.model;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import org.json.JSONArray;
import net.minidev.json.JSONObject;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import com.example.demo.DAO.procedure.CallerClient;
import com.example.demo.entity.Client;
import com.example.demo.entity.Login;
import com.example.demo.error.ErrorValidate;
import com.example.demo.error.ErrorVerify;
import com.example.demo.util.AddErrorArrayError;
import com.example.demo.util.GetDataControlFromValue;
import com.example.demo.util.SendEmail;
import com.example.demo.validate.ValidatorLengthComposite;
import com.example.demo.validate.ValidatorValueComposite;
import com.example.demo.verify.VerifyClient;
import com.example.demo.verify.VerifyLoginClient;

public class CRUDclient {

  JSONArray arrayJson;
  HashMap<String, ArrayList<ErrorValidate>> errorsValidation;
  HashMap<String, ErrorVerify> errorsVerification;

  public CRUDclient() {
    arrayJson = new JSONArray();
    errorsValidation = new HashMap<String, ArrayList<ErrorValidate>>();
    errorsVerification = new HashMap<String, ErrorVerify>();
  }

  public JSONArray addClient(Client client) {

    errorsValidation = getErrorsLength(client);
    Boolean error = false;
    CallerClient callerClient;
    SendEmail sendemail;
    if (errorsValidation.isEmpty()) {
      errorsValidation = getErrorsValue(client);
      if (errorsValidation.isEmpty()) {
        try {
          errorsVerification = getErrorsVerify(client);
        } catch (SQLException e) {
          e.printStackTrace();
        }
        if (errorsVerification.isEmpty()) {
          try {
            callerClient = new CallerClient();

            if (callerClient.addClient(client)) {
              successfulAction("addClient");
              sendemail = new SendEmail();
              sendemail.sendNewClient(client.getEmail());
            } else {
              failedAction("addClient");
            }
          } catch (ClassNotFoundException | SQLException e) {

            e.printStackTrace();
          }

        } else {
          for (java.util.Map.Entry<String, ErrorVerify> entry : errorsVerification.entrySet()) {
            JSONObject oneJson = new JSONObject();
            oneJson.put("messageErrorControl", entry.getValue().getMsgEs());
            oneJson.put("messageValueControl", entry.getKey());
            oneJson.put("messageNameControl", GetDataControlFromValue.getDataControlClient(client, entry.getKey()));
            arrayJson.put(oneJson);
          }
          return arrayJson;
        }

      } else {
        error = true;
      }
    } else {
      error = true;
    }
    if (error) {
      for (java.util.Map.Entry<String, ArrayList<ErrorValidate>> entry : errorsValidation.entrySet()) {
        ArrayList<ErrorValidate> myerror = entry.getValue();
        myerror.forEach((n) -> {
          JSONObject oneJson = new JSONObject();
          oneJson.put("messageErrorControl", n.getMsgEs());
          oneJson.put("messageValueControl", entry.getKey());
          oneJson.put("messageNameControl", GetDataControlFromValue.getDataControlClient(client, entry.getKey()));
          arrayJson.put(oneJson);
        });
      }
    }
    return arrayJson;
  }

  public JSONArray checkLoginClient(Login login) {
    errorsValidation = getErrorsLength(login);
    Boolean error = false;
    if (errorsValidation.isEmpty()) {
      errorsValidation = getErrorsValue(login);
      if (errorsValidation.isEmpty()) {
        try {
          errorsVerification = getErrorsVerify(login);
          if (errorsVerification.isEmpty()) {
            successfulAction("loginClient");
          } else {
            for (java.util.Map.Entry<String, ErrorVerify> entry : errorsVerification.entrySet()) {
              JSONObject oneJson = new JSONObject();
              oneJson.put("messageErrorControl", entry.getValue().getMsgEs());
              oneJson.put("messageValueControl", entry.getKey());
              oneJson.put("messageNameControl", GetDataControlFromValue.getDataControlClient(login, entry.getKey()));
              arrayJson.put(oneJson);
            }
            return arrayJson;
          }
        } catch (SQLException e) {
          e.printStackTrace();
        }
      } else {
        error = true;
      }
    } else {
      error = true;
    }
    if (error) {
      for (java.util.Map.Entry<String, ArrayList<ErrorValidate>> entry : errorsValidation.entrySet()) {
        ArrayList<ErrorValidate> myerror = entry.getValue();
        myerror.forEach((n) -> {
          JSONObject oneJson = new JSONObject();
          oneJson.put("messageErrorControl", n.getMsgEs());
          oneJson.put("messageValueControl", entry.getKey());
          oneJson.put("messageNameControl", GetDataControlFromValue.getDataControlClient(login, entry.getKey()));
          arrayJson.put(oneJson);
        });
      }
    }

    return arrayJson;

  }

  private HashMap<String, ArrayList<ErrorValidate>> getErrorsValue(Client client) {
    HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
    errorsAll = new AddErrorArrayError(new ValidatorValueComposite().validate(client), errorsAll).getErrorsAll();
    return errorsAll;
  }

  private HashMap<String, ArrayList<ErrorValidate>> getErrorsValue(Login login) {
    HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
    errorsAll = new AddErrorArrayError(new ValidatorValueComposite().validate(login), errorsAll).getErrorsAll();
    return errorsAll;
  }

  private HashMap<String, ArrayList<ErrorValidate>> getErrorsLength(Client client) {
    HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
    errorsAll = new AddErrorArrayError(new ValidatorLengthComposite().validate(client), errorsAll).getErrorsAll();
    return errorsAll;
  }

  private HashMap<String, ArrayList<ErrorValidate>> getErrorsLength(Login login) {
    HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
    errorsAll = new AddErrorArrayError(new ValidatorLengthComposite().validate(login), errorsAll).getErrorsAll();
    return errorsAll;
  }

  private HashMap<String, ErrorVerify> getErrorsVerify(Client client) throws SQLException {
    VerifyClient verifyClient = null;
    try {
      verifyClient = new VerifyClient(client);
    } catch (ClassNotFoundException e) {

      e.printStackTrace();
    } catch (SQLException e) {

      e.printStackTrace();
    }
    return verifyClient.verify();
  }

  private HashMap<String, ErrorVerify> getErrorsVerify(Login login) throws SQLException {
    VerifyLoginClient verifyClient = null;
    try {
      verifyClient = new VerifyLoginClient(login);
    } catch (ClassNotFoundException e) {

      e.printStackTrace();
    } catch (SQLException e) {

      e.printStackTrace();
    }
    return verifyClient.verify();
  }

  private void successfulAction(String operation) {
    RequestContextHolder.currentRequestAttributes().setAttribute("activePage", "client",
        RequestAttributes.SCOPE_SESSION);
    JSONObject oneJson = new JSONObject();
    oneJson.put("error", 0);
    oneJson.put("validation", "ok");
    oneJson.put("verification", "ok");
    oneJson.put(operation, "ok");
    arrayJson.put(oneJson);
  }

  private void failedAction(String operation) {
    JSONObject oneJson = new JSONObject();
    oneJson.put("error", 1);
    oneJson.put("validation", "ok");
    oneJson.put("verification", "ok");
    oneJson.put(operation, "error");
    arrayJson.put(oneJson);
  }

  /*
   * private void errorVerification(SuperClient superclient) {
   * GetDataControlFromValue getDataControlFromValue = new
   * GetDataControlFromValue(); for (java.util.Map.Entry<String, ErrorVerify>
   * entry : errorsVerification.entrySet()) { JSONObject oneJson = new
   * JSONObject(); oneJson.put("messageErrorControl",
   * entry.getValue().getMsgEs()); oneJson.put("messageValueControl",
   * entry.getKey()); oneJson.put("messageNameControl",
   * getDataControlFromValue.getDataControlClient(superclient, entry.getKey()));
   * arrayJson.put(oneJson); }
   * 
   * }
   */
}
