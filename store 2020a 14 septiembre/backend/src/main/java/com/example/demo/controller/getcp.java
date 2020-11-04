package com.example.demo.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.demo.entity.Client;
import com.google.gson.Gson;

import net.minidev.json.JSONObject;

@WebServlet("/hola")
public class getcp extends HttpServlet {

  private static final long serialVersionUID = 1L;
  String client;

  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    System.out.println("En el servlet");
    JSONObject obj = new JSONObject();
    obj.put("status", "ok");
    client = request.getParameter("dataPersonClient");
    Gson gson = new Gson();
    Client user = gson.fromJson(client, Client.class);
    String json = gson.toJson(user);
    System.out.println(json); // NULL
    response.getWriter().write(obj.toJSONString());
    // response.getWriter().write(json);
  }

  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doPost(request, response);
  }
}
