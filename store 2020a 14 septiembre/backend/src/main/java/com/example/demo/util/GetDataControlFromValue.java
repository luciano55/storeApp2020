package com.example.demo.util;

import com.example.demo.entity.Client;
import com.example.demo.entity.Credential;
import com.example.demo.entity.Login;

public class GetDataControlFromValue {

  public static String getDataControlClient(Client client, String value) {

    if (client.getNif().equals(value))
      return DataControl.DATACONTROL_NIF.getMsg();
    if (client.getName().equals(value))
      return DataControl.DATACONTROL_FIRSTNAME.getMsg();
    if (client.getSurname().equals(value))
      return DataControl.DATACONTROL_LASTNAME.getMsg();
    if (client.getAddress().equals(value))
      return DataControl.DATACONTROL_ADRESS.getMsg();
    if (client.getEmail().equals(value))
      return DataControl.DATACONTROL_EMAIL.getMsg();
    if (client.getPostalCode().equals(value))
      return DataControl.DATACONTROL_CP.getMsg();
    if (client.getBirthdate().equals(value))
      return DataControl.DATACONTROL_BIRTHDATE.getMsg();
    if (client.getMobile().equals(value))
      return DataControl.DATACONTROL_MOBILE.getMsg();
    return "";
  }

  public static String getDataControlClient(Login login, String value) {
    if (login.getUser().equals(value))
      return DataControl.DATACONTROL_USER.getMsg();
    if (login.getPassword().equals(value))
      return DataControl.DATACONTROL_PASSWORD.getMsg();

    return "";
  }

  public static String getDataControlClient(Credential credential, String value) {
    if (credential.getNif().equals(value))
      return DataControl.DATACONTROL_NIF.getMsg();
    if (credential.getEmail().equals(value))
      return DataControl.DATACONTROL_EMAIL.getMsg();

    return "";
  }
}
