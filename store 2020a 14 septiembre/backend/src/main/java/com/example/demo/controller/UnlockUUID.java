package com.example.demo.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;

import com.example.demo.DAO.procedure.CallerClient;
import net.minidev.json.JSONObject;
import com.example.demo.error.ErrorResponse;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

@WebServlet("/unlockUUID")
public class UnlockUUID extends HttpServlet {

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

    JsonObject jsonObject = new JsonParser().parse(json).getAsJsonObject();
    String uuid = jsonObject.get("uuid").getAsString();
    JSONArray arrayJson = new JSONArray();
    JSONObject oneJson = new JSONObject();
    try {
      CallerClient callerClient = new CallerClient();
      if (callerClient.unlockUserUUID(uuid)) {
        System.out.println("email: " + uuid + " desbloqueado");
        RequestContextHolder.currentRequestAttributes().setAttribute("tryNumber", 0, RequestAttributes.SCOPE_SESSION);
        oneJson.put("error", ErrorResponse.NOERROR);
        oneJson.put("blocked", "false");

      } else {
        System.out.println("email: " + uuid + " NO desbloqueado");
        oneJson.put("error", ErrorResponse.ERRORUSERBLOCK);
        oneJson.put("blocked", "ok");
      }
    } catch (ClassNotFoundException | SQLException e) {
      e.printStackTrace();
    }

    arrayJson.put(oneJson);
    response.getWriter().write((arrayJson).toString());
  }

  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doPost(request, response);
  }

}
