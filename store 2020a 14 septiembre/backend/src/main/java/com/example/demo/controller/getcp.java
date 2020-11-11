package com.example.demo.controller;

import java.io.BufferedReader;
import java.io.IOException;

import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;

import com.example.demo.entity.Client;
import com.example.demo.error.ErrorValidate;
import com.example.demo.util.InverProperty;
import com.example.demo.validate.ClientValidatorComposite;
import com.google.gson.Gson;

import org.json.JSONArray;

import net.minidev.json.JSONObject;

@WebServlet("/hola")
public class getcp extends HttpServlet {

  private static final long serialVersionUID = 1L;

  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    response.setCharacterEncoding("UTF-8");
    response.setContentType("text/html;charset=UTF-8");
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
    ClientValidatorComposite clientValidatorComposite = new ClientValidatorComposite();
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

    HashMap<String, ErrorValidate> errorsAll = new HashMap<>();
    errorsAll = clientValidatorComposite.validate(client);
    JSONObject obj = new JSONObject();
    if (errorsAll.isEmpty()) {
      System.out.println("Validación sin errores");
      obj.put("Validacion", "ok");
      obj.put("Error", 0);
      // Pasamos a insertar
      response.getWriter().write(obj.toJSONString());
    } else {
      System.out.println("Tenemos Errores:");
      JSONArray arrayJson = new JSONArray();
      for (HashMap.Entry<String, ErrorValidate> entry : errorsAll.entrySet()) {
        JSONObject oneJson = new JSONObject();

        oneJson.put("messageErrorControl", entry.getValue().getMsgEs());
        oneJson.put("messageValueControl", entry.getKey());
        oneJson.put("messageNameControl", InverProperty.getPropertyUser(client, entry.getKey()));
        arrayJson.put(oneJson);
      }
      response.getWriter().write((arrayJson).toString());
    }
    /*
     * System.out.println(client.getNameClient());
     * System.out.println(client.getSurnameClient());
     * 
     * JSONObject obj = new JSONObject(); obj.put("firstname",
     * client.getNameClient()); obj.put("lastname", client.getSurnameClient());
     */

    // String json = gson.toJson(user);
    // System.out.println(user.getEmail());
    // response.getWriter().write("ok");
    // response.getWriter().write(obj.toJSONString());
    // response.getWriter().write(json);
  }

  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doPost(request, response);
  }
}
