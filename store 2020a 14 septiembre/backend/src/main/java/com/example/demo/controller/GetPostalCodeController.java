package com.example.demo.controller;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.example.demo.model.business.CallerPostalCode;

import net.minidev.json.JSONArray;

@WebServlet("/getcp")
public class GetPostalCodeController {

  HttpSession session;

  protected void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException, SQLException {
    session = request.getSession();
    response.setCharacterEncoding("UTF-8");
    response.setContentType("text/html;charset=UTF-8");
    JSONArray cpsJson = new JSONArray();

    try {
      CallerPostalCode callerPostalCode = new CallerPostalCode();
      cpsJson = callerPostalCode.getPostalCodeExtremadura();
    } catch (ClassNotFoundException e) {
      e.printStackTrace();
    }
    response.getWriter().write(cpsJson.toJSONString());
  }

  protected void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException, SQLException {
    doPost(request, response);
  }
}
