package com.example.demo.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.example.demo.error.ErrorValidate;

public class AddErrorArrayError {
  private HashMap<String, ErrorValidate> errors = new HashMap<>();
  private HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<String, ArrayList<ErrorValidate>>();

  public AddErrorArrayError(HashMap<String, ErrorValidate> errors,
      HashMap<String, ArrayList<ErrorValidate>> errorsAll) {
    this.errors = errors;
    this.errorsAll = errorsAll;
  }

  public HashMap<String, ArrayList<ErrorValidate>> getErrorsAll() {

    for (Map.Entry<String, ErrorValidate> line : this.errors.entrySet()) {
      String nameValidador = line.getKey();
      ErrorValidate errorValidate = line.getValue();
      addError(nameValidador, errorValidate);
    }
    return errorsAll;
  }

  private void addError(String key, ErrorValidate value) {
    ArrayList<ErrorValidate> temporaryList = null;
    if (this.errorsAll.containsKey(key)) {
      temporaryList = this.errorsAll.get(key);
      if (temporaryList == null) {
        temporaryList = new ArrayList<ErrorValidate>();
      }
      temporaryList.add(value);
    } else {
      temporaryList = new ArrayList<ErrorValidate>();
      temporaryList.add(value);
    }
    this.errorsAll.put(key, temporaryList);
  }
}
