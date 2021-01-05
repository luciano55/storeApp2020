package com.example.demo.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.demo.entity.Client;
import com.example.demo.model.CRUDclient;
import com.google.gson.Gson;

import org.json.JSONArray;

@WebServlet("/updatePerson")
public class UpdatePerson extends HttpServlet {

  private static final long serialVersionUID = 1L;

  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    response.setCharacterEncoding("UTF-8");
    response.setContentType("text/html;charset=UTF-8");

    StringBuilder sb = new StringBuilder();
    BufferedReader br = request.getReader();
    String str = null;
    while ((str = br.readLine()) != null) {
      sb.append(str);
    }
    String json = sb.toString();
    System.out.println(json);

    Gson g = new Gson();
    Client client = g.fromJson(json, Client.class);

    CRUDclient crud = new CRUDclient();
    JSONArray arrayJson = new JSONArray();
    try {
      arrayJson = crud.updatePerson(client);
    } catch (ClassNotFoundException e) {
      e.printStackTrace();
    } catch (SQLException e) {
      e.printStackTrace();
    }
    response.getWriter().write((arrayJson).toString());
  }

  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doPost(request, response);
  }
}
