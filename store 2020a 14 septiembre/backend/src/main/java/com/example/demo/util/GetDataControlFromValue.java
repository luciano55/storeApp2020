package com.example.demo.util;

import com.example.demo.entity.Client;

public class GetDataControlFromValue {
  static public String getDataControlClient(Client client, String value) {
    if (client.getNif().equals(value))
      return ControlData.CONTROLDATA_NIF.getMsg();
    if (client.getName().equals(value))
      return ControlData.CONTROLDATA_FIRSTNAME.getMsg();
    if (client.getSurname().equals(value))
      return ControlData.CONTROLDATA_LASTNAME.getMsg();
    if (client.getAddress().equals(value))
      return ControlData.CONTROLDATA_ADRESS.getMsg();
    if (client.getEmail().equals(value))
      return ControlData.CONTROLDATA_EMAIL.getMsg();
    if (client.getPostalCode().equals(value))
      return ControlData.CONTROLDATA_CP.getMsg();
    if (client.getBirthdate().equals(value))
      return ControlData.CONTROLDATA_BIRTHDATE.getMsg();
    if (client.getMobile().equals(value))
      return ControlData.CONTROLDATA_MOBILE.getMsg();
    return "";
  }

}
