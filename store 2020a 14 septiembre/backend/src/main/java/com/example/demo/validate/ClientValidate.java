package com.example.demo.validate;

import java.util.ArrayList;
import java.util.HashMap;

import com.example.demo.entity.Client;
import com.example.demo.validate.validable.regexp.AddressValidate;
import com.example.demo.validate.validable.regexp.BirthdayValidate;
import com.example.demo.validate.validable.regexp.CodigoPostalValidate;
import com.example.demo.validate.validable.regexp.EmailValidate;
import com.example.demo.validate.validable.regexp.LettersWithSpaceValidate;
import com.example.demo.validate.validable.regexp.MobileSpainValidate;

public class ClientValidate {

  private HashMap<String, ArrayList<String>> listValidate;

  public HashMap<String, ArrayList<String>> validateClient(Client client) {
    listValidate = new HashMap<String, ArrayList<String>>();
    addValidate(LettersWithSpaceValidate.VALIDATE_NAME, client.getNameClient());
    addValidate(LettersWithSpaceValidate.VALIDATE_NAME, client.getSurnameClient());
    addValidate(BirthdayValidate.VALIDATE_NAME, client.getBirthdateClient());
    addValidate(AddressValidate.VALIDATE_NAME, client.getClientAddress());
    addValidate(MobileSpainValidate.VALIDATE_NAME, client.getMobileClient());
    addValidate(EmailValidate.VALIDATE_NAME, client.getEmailClient());
    addValidate(CodigoPostalValidate.VALIDATE_NAME, client.getPostalCodeClient());

    return listValidate;
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