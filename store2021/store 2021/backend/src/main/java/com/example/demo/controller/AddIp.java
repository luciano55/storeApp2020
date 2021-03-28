package com.example.demo.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.demo.DAO.procedure.CallerClient;
import com.example.demo.entity.IpLocation;

import com.google.gson.Gson;

@WebServlet("/addIp")
public class AddIp extends HttpServlet {

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
    System.out.println("AddIp recibe" + json);

    Gson g = new Gson();
    IpLocation ip = g.fromJson(json, IpLocation.class);

    System.out.println("Action:" + ip.getAction());

    CallerClient callerClient;

    try {
      callerClient = new CallerClient();
      if (callerClient.addIpLocation(ip)) {
        System.out.println("addIpLocation ok");
      } else {
        System.out.println("addIpLocation Error");
      }
    } catch (ClassNotFoundException | SQLException e1) {

      e1.printStackTrace();
    }

    // response.getWriter().write((arrayJson).toString());
  }

  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doPost(request, response);
  }
}
