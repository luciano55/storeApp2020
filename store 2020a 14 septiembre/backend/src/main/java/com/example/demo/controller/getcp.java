package com.example.demo.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.minidev.json.JSONObject;

@WebServlet("/hola")
public class getcp extends HttpServlet {

  private static final long serialVersionUID = 1L;

  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    System.out.println("En el servlet");
    JSONObject obj = new JSONObject();
    obj.put("status", "ok");
    // String jsonStr = request.getParameter("dataPersonClient");
    // JSONObject jsonObj = new JSONObject();
    // JSONParser parser = new JSONParser(jsonStr);

    response.getWriter().write(obj.toJSONString());
  }

  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doPost(request, response);
  }
}
