package com.example.demo.error;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import org.json.JSONArray;
import net.minidev.json.JSONObject;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import com.example.demo.DAO.procedure.CallerClient;
import com.example.demo.entity.Client;

import com.example.demo.util.AddErrorArrayError;
import com.example.demo.util.GetDataControlFromValue;
import com.example.demo.validate.ValidatorLengthComposite;
import com.example.demo.validate.ValidatorValueComposite;
import com.example.demo.verify.VerifyClient;

public class CRUD {

  public JSONArray addClient(Client client) {
    HashMap<String, ArrayList<ErrorValidate>> errorsValidation = new HashMap<String, ArrayList<ErrorValidate>>();
    HashMap<String, ErrorVerify> errorsVerification = new HashMap<String, ErrorVerify>();
    final JSONArray arrayJson = new JSONArray();
    errorsValidation = getErrorsLength(client);
    Boolean error = false;
    CallerClient callerClient;
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
              RequestContextHolder.currentRequestAttributes().setAttribute("activePage", "client",
                  RequestAttributes.SCOPE_SESSION);
              JSONObject oneJson = new JSONObject();
              oneJson.put("error", 0);
              oneJson.put("validation", "ok");
              oneJson.put("verification", "ok");
              oneJson.put("addClient", "ok");
              arrayJson.put(oneJson);
            } else {
              JSONObject oneJson = new JSONObject();
              oneJson.put("error", 1);
              oneJson.put("validation", "ok");
              oneJson.put("verification", "ok");
              oneJson.put("addClient", "error");
              arrayJson.put(oneJson);
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

  private HashMap<String, ArrayList<ErrorValidate>> getErrorsValue(Client client) {
    HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
    errorsAll = new AddErrorArrayError(new ValidatorValueComposite().validate(client), errorsAll).getErrorsAll();
    return errorsAll;
  }

  private HashMap<String, ArrayList<ErrorValidate>> getErrorsLength(Client client) {
    HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
    errorsAll = new AddErrorArrayError(new ValidatorLengthComposite().validate(client), errorsAll).getErrorsAll();
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
}
