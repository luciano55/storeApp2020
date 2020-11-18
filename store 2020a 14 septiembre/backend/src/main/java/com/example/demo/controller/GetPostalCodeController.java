package com.example.demo.controller;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.demo.DAO.procedure.CallerPostalCode;

import net.minidev.json.JSONArray;

@WebServlet("/getcpExtremadura")
public class GetPostalCodeController extends HttpServlet {

  /**
   *
   */
  private static final long serialVersionUID = 1L;
  // HttpSession session;

  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    // System.out.println("IN controller");
    // session = request.getSession();
    response.setCharacterEncoding("UTF-8");
    response.setContentType("text/html;charset=UTF-8");
    JSONArray cpsJson = new JSONArray();

    try {
      CallerPostalCode callerPostalCode = new CallerPostalCode();
      cpsJson = callerPostalCode.getPostalCodeExtremadura();
    } catch (ClassNotFoundException e) {
      e.printStackTrace();
    } catch (SQLException e) {

      e.printStackTrace();
    }
    response.getWriter().write(cpsJson.toJSONString());
  }

  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doPost(request, response);
  }
}
