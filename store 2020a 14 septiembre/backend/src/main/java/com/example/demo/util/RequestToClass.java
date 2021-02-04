package com.example.demo.util;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import com.example.demo.entity.Client;
import com.google.gson.Gson;

public class RequestToClass {
  private HttpServletRequest request;

  public RequestToClass(HttpServletRequest request, Object object) {
    this.request = request;
  }

  public Object getStringJson(Object cliente) throws IOException {

    StringBuilder sb = new StringBuilder();
    BufferedReader br = request.getReader();
    String str = null;
    while ((str = br.readLine()) != null) {
      sb.append(str);
    }
    String json = sb.toString();
    Gson g = new Gson();
    Object client = g.fromJson(json, cliente.getClass());
    System.out.println(client);
    return json;
  }
}
