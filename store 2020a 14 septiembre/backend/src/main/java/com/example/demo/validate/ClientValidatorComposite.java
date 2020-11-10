package com.example.demo.validate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.example.demo.entity.Client;
import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.validable.ValidableValue;

public class ClientValidatorComposite {

  private HashMap<String, ArrayList<String>> listValidate = new HashMap<String, ArrayList<String>>();

  private ValidatorRegistry validatorRegistration = ValidatorRegistry.getInstance();

  public HashMap<String, ErrorValidate> setValidate(Client client) {

    addValidate(Validator.letterWithSpace.getName(), client.getNameClient());
    addValidate(Validator.cifNieNif.getName(), client.getNifClient());
    addValidate(Validator.letterWithSpace.getName(), client.getSurnameClient());
    addValidate(Validator.birthdate.getName(), client.getBirthdateClient());
    addValidate(Validator.address.getName(), client.getClientAddress());
    addValidate(Validator.mobile.getName(), client.getMobileClient());
    addValidate(Validator.email.getName(), client.getEmailClient());
    addValidate(Validator.cp.getName(), client.getPostalCodeClient());
    return getError();
  }

  private HashMap<String, ErrorValidate> getError() {
    HashMap<String, ErrorValidate> errors = new HashMap<>();
    for (Map.Entry<String, ArrayList<String>> line : this.listValidate.entrySet()) {
      String validatorName = line.getKey();
      ArrayList<String> lineValue = line.getValue();
      lineValue.forEach((value) -> {
        ValidableValue validable = this.validatorRegistration.getValidator(validatorName);
        ErrorValidate error = validable.validate((String) value);
        if (error.getId() != 0) {
          errors.put((String) value, error);
        }
      });
    }
    return errors;
  }

  private void addValidate(String key, String value) {
    ArrayList<String> temporaryList = null;
    if (listValidate.containsKey(key)) {
      temporaryList = listValidate.get(key);
      if (temporaryList == null) {
        temporaryList = new ArrayList<String>();
      }
      temporaryList.add(value);
    } else {
      temporaryList = new ArrayList<String>();
      temporaryList.add(value);
    }
    listValidate.put(key, temporaryList);
  }
}