package com.example.demo.reflection.pak;

import javax.servlet.http.HttpSession;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class ObjectTransferSession {

  public void convertir(Object object, HttpSession session) throws InvocationTargetException, IllegalAccessException {
    Field[] atributosObjetos = object.getClass().getDeclaredFields();
    Method[] metodosObjetos = object.getClass().getDeclaredMethods();

    for (int i = 0; i < atributosObjetos.length; i++) {
      String atributoActual = atributosObjetos[i].getName();
      for (int j = 0; j < metodosObjetos.length; j++) {
        if (metodosObjetos[j].getName().toLowerCase().equals("get" + atributoActual.toLowerCase())) {
          session.setAttribute(atributoActual, metodosObjetos[j].invoke(object));
        }
      }
    }

  }

}
