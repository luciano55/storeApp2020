package com.example.demo.reflection.pak;

import javax.servlet.http.HttpSession;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class SessionTransferObject {

  public SessionTransferObject(HttpSession session, Object object)
      throws InvocationTargetException, IllegalAccessException {
    for (Method method : object.getClass().getDeclaredMethods()) {
      for (Field field : object.getClass().getDeclaredFields()) {
        if (isSetter(method, field)) {
          if (existField(session, field)) {
            fillField(session, object, method, field);
          }
        }
      }
    }
  }

  private void fillField(HttpSession session, Object object, Method m, Field f)
      throws IllegalAccessException, InvocationTargetException {
    m.invoke(object, session.getAttribute(f.getName()));
  }

  private boolean isSetter(Method m, Field f) {
    return m.getName().toLowerCase().contains("set" + f.getName().toLowerCase());
  }

  private boolean existField(HttpSession session, Field f) {
    return session.getAttribute(f.getName()) != null;
  }
}
