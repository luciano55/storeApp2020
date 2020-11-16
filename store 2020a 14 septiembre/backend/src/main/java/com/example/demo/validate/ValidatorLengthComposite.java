package com.example.demo.validate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.example.demo.entity.Client;
import com.example.demo.entity.StringLimit;
import com.example.demo.error.ErrorValidate;
import com.example.demo.validate.validable.ValidableLength;

public class ValidatorLengthComposite {
  private Map<String, ArrayList<StringLimit>> validateMap = new HashMap<String, ArrayList<StringLimit>>();

  private ValidatorLengthRegistry validatorRegistration = ValidatorLengthRegistry.getInstance();

  public HashMap<String, ErrorValidate> validate(Client client) {
    addValidate(Validator.size.getName(), client.getName(), 2, 50);
    addValidate(Validator.size.getName(), client.getSurname(), 12, 100);
    addValidate(Validator.size.getName(), client.getEmail(), 5, 150);
    addValidate(Validator.size.getName(), client.getPostalCode(), 5, 5);
    addValidate(Validator.size.getName(), client.getBirthdate(), 10, 10);
    addValidate(Validator.size.getName(), client.getMobile(), 12, 14);
    return generateError();
  }

  private void addValidate(String key, String control, int min, int max) {
    ArrayList<StringLimit> temporaryList = null;
    StringLimit stringLimit = new StringLimit(control, min, max);
    if (validateMap.containsKey(key)) {
      temporaryList = validateMap.get(key);
      if (temporaryList == null) {
        temporaryList = new ArrayList<StringLimit>();
      }
      temporaryList.add(stringLimit);
    } else {
      temporaryList = new ArrayList<StringLimit>();
      temporaryList.add(stringLimit);
    }
    validateMap.put(key, temporaryList);
  }

  private HashMap<String, ErrorValidate> generateError() {
    HashMap<String, ErrorValidate> errors = new HashMap<>();
    for (Map.Entry<String, ArrayList<StringLimit>> line : this.validateMap.entrySet()) {
      String nameValidador = line.getKey();
      ArrayList<StringLimit> lineValue = line.getValue();
      lineValue.forEach((value) -> {
        ValidableLength validable = this.validatorRegistration.getValidate(nameValidador);
        ErrorValidate error = validable.validate(value.getString(), value.getMin(), value.getMax());
        if (error.getId() != 0) {
          errors.put(value.getString(), error);
        }
      });
    }
    return errors;
  }
}
