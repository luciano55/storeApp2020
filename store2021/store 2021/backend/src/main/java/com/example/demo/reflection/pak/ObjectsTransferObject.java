package com.example.demo.reflection.pak;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class ObjectsTransferObject {

  public void transferir(Object molde, Object... objectos) throws InvocationTargetException, IllegalAccessException {
    // int m = 0;
    Method[] metodosMolde = molde.getClass().getDeclaredMethods();
    for (int i = 0; i < objectos.length; i++) {
      Method[] metodosTemp = objectos[i].getClass().getDeclaredMethods();
      for (int k = 0; k < metodosMolde.length; k++) {
        if (metodosMolde[k].getName().substring(0, 3).equals("set")) {
          for (int j = 0; j < metodosTemp.length; j++) {
            if (metodosTemp[j].getName().equals("get" + metodosMolde[k].getName().substring(3))) {
              metodosMolde[k].invoke(molde, metodosTemp[j].invoke(objectos[i]));
            }
          }
        }
      }
    }
  }
}
