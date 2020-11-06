package com.example.demo.controller;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;

import com.example.demo.entity.Client;

import com.google.gson.Gson;

import net.minidev.json.JSONObject;

//import net.minidev.json.JSONObject;

@WebServlet("/hola")
public class getcp extends HttpServlet {

  private static final long serialVersionUID = 1L;

  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    /*
     * session = request.getSession(); //
     * res.setContentType("application/json;charset=UTF-8");
     * response.setCharacterEncoding("UTF-8");
     * response.setContentType("text/html;charset=UTF-8");
     * System.out.println("En el servlet");
     * 
     * client = request.getParameter("json"); System.out.println("client");
     * System.out.println(client); // Gson gson = new Gson(); // Client user =
     * gson.fromJson(client, Client.class);
     */
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
    System.out.println(client.getFirstName());
    System.out.println(client.getLastName());

    JSONObject obj = new JSONObject();
    obj.put("firstname", client.getFirstName());
    obj.put("lastname", client.getLastName());

    // String json = gson.toJson(user);
    // System.out.println(user.getEmail());
    // response.getWriter().write("ok");
    response.getWriter().write(obj.toJSONString());
    // response.getWriter().write(json);
  }

  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doPost(request, response);
  }
}
