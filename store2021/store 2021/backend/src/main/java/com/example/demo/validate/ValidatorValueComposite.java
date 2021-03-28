package com.example.demo.validate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.example.demo.entity.Client;
import com.example.demo.entity.Credential;
import com.example.demo.entity.Login;
import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.validable.ValidableValue;

public class ValidatorValueComposite {

  private HashMap<String, ArrayList<String>> listValidate = new HashMap<String, ArrayList<String>>();

  private ValidatorValueRegistry validatorRegistration = ValidatorValueRegistry.getInstance();

  public HashMap<String, ErrorValidate> validate(Client client) {

    addValidate(Validator.letterWithSpace.getName(), client.getName());
    addValidate(Validator.cifNieNif.getName(), client.getNif());
    addValidate(Validator.letterWithSpace.getName(), client.getSurname());
    if (client.getBirthdate().length() > 0l) {
      addValidate(Validator.birthdate.getName(), client.getBirthdate());
    }
    addValidate(Validator.address.getName(), client.getAddress());
    // addValidate(Validator.mobileSpain.getName(), client.getMobile());
    addValidate(Validator.mobile.getName(), client.getMobile());

    addValidate(Validator.email.getName(), client.getEmail());
    addValidate(Validator.cp.getName(), client.getPostalCode());
    return getError();
  }

  public HashMap<String, ErrorValidate> validate(Login login) {

    addValidate(Validator.user.getName(), login.getUser());
    addValidate(Validator.password.getName(), login.getPassword());
    return getError();
  }

  public HashMap<String, ErrorValidate> validate(Credential credencial) {
    addValidate(Validator.cifNieNif.getName(), credencial.getNif());
    addValidate(Validator.email.getName(), credencial.getEmail());
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