package com.example.demo.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.demo.error.ErrorResponse;

import org.json.JSONArray;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import net.minidev.json.JSONObject;

@WebServlet("/logout")
public class Logout extends HttpServlet {
  private static final long serialVersionUID = 1L;

  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    response.setCharacterEncoding("UTF-8");
    response.setContentType("text/html;charset=UTF-8");
    RequestContextHolder.currentRequestAttributes().setAttribute("activePage", "index",
        RequestAttributes.SCOPE_SESSION);
    System.out.println("Pagina cambiada en Logout");
    JSONArray arrayJson = new JSONArray();
    JSONObject oneJson = new JSONObject();
    oneJson.put("error", ErrorResponse.NOERROR);
    oneJson.put("idClient", (int) RequestContextHolder.currentRequestAttributes().getAttribute("idClient",
        RequestAttributes.SCOPE_SESSION));
    oneJson.put("action", "logout");
    arrayJson.put(oneJson);
    response.getWriter().write((arrayJson).toString());
  }

  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doPost(request, response);
  }

}