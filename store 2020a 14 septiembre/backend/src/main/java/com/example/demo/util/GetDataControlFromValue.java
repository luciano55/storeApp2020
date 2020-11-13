package com.example.demo.util;

import com.example.demo.entity.Client;

public class GetDataControlFromValue {
  static public String getDataControlClient(Client client, String value) {
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

}
