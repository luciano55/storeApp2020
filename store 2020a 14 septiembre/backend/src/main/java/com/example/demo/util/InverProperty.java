package com.example.demo.util;

import com.example.demo.entity.Client;

public class InverProperty {
  static public String getPropertyUser(Client client, String value) {
    if (client.getNifClient().equals(value))
      return ControlData.CONTROLDATA_NIF.getMsg();
    if (client.getNameClient().equals(value))
      return ControlData.CONTROLDATA_FIRSTNAME.getMsg();
    if (client.getSurnameClient().equals(value))
      return ControlData.CONTROLDATA_LASTNAME.getMsg();
    if (client.getClientAddress().equals(value))
      return ControlData.CONTROLDATA_ADRESS.getMsg();
    if (client.getEmailClient().equals(value))
      return ControlData.CONTROLDATA_EMAIL.getMsg();
    if (client.getPostalCodeClient().equals(value))
      return ControlData.CONTROLDATA_CP.getMsg();
    if (client.getBirthdateClient().equals(value))
      return ControlData.CONTROLDATA_BIRTHDATE.getMsg();
    if (client.getMobileClient().equals(value))
      return ControlData.CONTROLDATA_MOBILE.getMsg();
    return "";
  }

}
