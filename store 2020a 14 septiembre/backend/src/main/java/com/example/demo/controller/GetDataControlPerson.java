package com.example.demo.controller;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.demo.DAO.procedure.CallerClient;

import com.example.demo.error.ErrorResponse;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

@WebServlet("/getDataControlPerson")
public class GetDataControlPerson extends HttpServlet {

  private static final long serialVersionUID = 1L;

  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    response.setCharacterEncoding("UTF-8");
    response.setContentType("text/html;charset=UTF-8");

    CallerClient caller = null;
    try {
      caller = new CallerClient();
    } catch (ClassNotFoundException | SQLException e1) {
      e1.printStackTrace();
    }

    JSONArray arrayJson = new JSONArray();
    JSONObject oneJson = new JSONObject();

    oneJson.put("update", true);
    oneJson.put("data", "data");
    oneJson.put("error", ErrorResponse.DATACONTROL);

    try {
      oneJson.put("datos", caller.getDataPerson((int) RequestContextHolder.currentRequestAttributes()
          .getAttribute("idClient", RequestAttributes.SCOPE_SESSION)));
    } catch (SQLException e1) {
      e1.printStackTrace();
    }
    arrayJson.put(oneJson);
    System.out.println(response);
    response.getWriter().write((arrayJson).toString());
  }

  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doPost(request, response);
  }

}
