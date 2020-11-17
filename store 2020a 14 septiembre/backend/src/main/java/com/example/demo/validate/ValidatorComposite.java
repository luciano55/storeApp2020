package com.example.demo.validate;

import java.util.ArrayList;
import java.util.HashMap;
import org.json.JSONArray;
import net.minidev.json.JSONObject;

import com.example.demo.entity.Client;
import com.example.demo.error.ErrorValidate;
import com.example.demo.util.AddErrorArrayError;
import com.example.demo.util.GetDataControlFromValue;

public class ValidatorComposite {

  public JSONArray getErrorsValidation(Client client) {
    HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<String, ArrayList<ErrorValidate>>();
    final JSONArray arrayJson = new JSONArray();
    errorsAll = getErrorsLength(client);
    Boolean error = false;
    if (errorsAll.isEmpty()) {
      errorsAll = getErrorsValue(client);
      if (errorsAll.isEmpty()) {
        JSONObject oneJson = new JSONObject();
        oneJson.put("validation", "ok");
        oneJson.put("error", 0);
        arrayJson.put(oneJson);
      } else {
        error = true;
      }
    } else {
      error = true;
    }
    if (error) {
      for (java.util.Map.Entry<String, ArrayList<ErrorValidate>> entry : errorsAll.entrySet()) {
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

  public static HashMap<String, ArrayList<ErrorValidate>> getErrorsAll(Client client) {
    HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<>();
    errorsAll = new AddErrorArrayError(new ValidatorValueComposite().validate(client), errorsAll).getErrorsAll();
    errorsAll = new AddErrorArrayError(new ValidatorLengthComposite().validate(client), errorsAll).getErrorsAll();
    return errorsAll;
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

}
