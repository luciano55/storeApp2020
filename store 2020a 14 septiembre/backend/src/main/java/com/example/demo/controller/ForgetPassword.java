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
import com.example.demo.entity.Credential;
import com.example.demo.util.SendEmail;
import com.google.gson.Gson;

import org.json.JSONObject;

import net.minidev.json.JSONArray;

@WebServlet("/forgetPassword")
public class ForgetPassword extends HttpServlet {

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
    Credential credential = g.fromJson(json, Credential.class);
    JSONArray arrayJson = new JSONArray();
    CallerClient callerClient;
    try {
      callerClient = new CallerClient();
      if (callerClient.checkingCredential(credential)) {
        if (callerClient.updateCredential(credential.getNif())) {
          SendEmail sendEmail = new SendEmail();
          sendEmail.sendClient(credential.getEmail(), "forget");
          JSONObject oneJson = new JSONObject();
          oneJson.put("error", 0);
          oneJson.put("reload", "ok");
          oneJson.put("sendForget", "ok");
          arrayJson.add(oneJson);
        } else {
          System.out.println("email forget fallido");
        }
      } else {
        System.out.println("checkingCredential fallido");
      }
    } catch (ClassNotFoundException | SQLException e1) {
      e1.printStackTrace();
    }

    response.getWriter().write((arrayJson).toString());
  }

  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doPost(request, response);
  }
}
