package com.example.demo.reflection.pak;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Enumeration;

public class RequestTransferSession {

  public void guardarDatosSesion(HttpServletRequest request, HttpSession session) {
    Enumeration<String> parametersName = request.getParameterNames();

    while (parametersName.hasMoreElements()) {
      String attributeName = parametersName.nextElement();
      session.setAttribute(attributeName, request.getParameter(attributeName));
    }
  }
}
