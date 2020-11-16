package com.example.demo.controller;

import java.io.BufferedReader;
import java.io.IOException;

import java.util.HashMap;
import java.util.Map.Entry;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;

import com.example.demo.entity.Client;
import com.example.demo.error.ErrorValidate;
import com.example.demo.util.GetDataControlFromValue;
import com.example.demo.validate.ValidatorComposite;
//import com.example.demo.validate.ValidatorLengthComposite;
//import com.example.demo.validate.ValidatorValueComposite;
import com.google.gson.Gson;

import org.json.JSONArray;

import net.minidev.json.JSONObject;

@WebServlet("/addClient")
public class AddClient extends HttpServlet {

  private static final long serialVersionUID = 1L;

  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    response.setCharacterEncoding("UTF-8");
    response.setContentType("text/html;charset=UTF-8");

    // ValidatorValueComposite clientValidatorValueComposite = new
    // ValidatorValueComposite();
    // ValidatorLengthComposite clientValidatorLengthComposite = new
    // ValidatorLengthComposite();
    // ValidatorComposite clientValidatorComposite = new ValidatorComposite();

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

    // HashMap<String, ErrorValidate> errorsAll = new HashMap<>();
    HashMap<String, ArrayList<ErrorValidate>> errorsAll = new HashMap<String, ArrayList<ErrorValidate>>();
    // errorsAll = clientValidatorValueComposite.validate(client);
    // errorsAll = clientValidatorLengthComposite.validate(client);
    // errorsAll = ValidatorComposite.getErrorsLength(client);
    // errorsAll = ValidatorComposite.getErrorsValue(client);
    errorsAll = ValidatorComposite.getErrorsAll(client);

    JSONObject obj = new JSONObject();
    if (errorsAll.isEmpty()) {
      System.out.println("Validación sin errores");
      obj.put("validation", "ok");
      obj.put("error", 0);
      // Pasamos a insertar
      response.getWriter().write(obj.toJSONString());
    } else {
      System.out.println("Tenemos Errores:");
      JSONArray arrayJson = new JSONArray();
      /*
       * for (HashMap.Entry<String, ErrorValidate> entry : errorsAll.entrySet ()) {
       * JSONObject oneJson = new JSONObject();
       * 
       * oneJson.put("messageErrorControl", entry.getValue().getMsgEs());
       * oneJson.put("messageValueControl", entry.getKey());
       * oneJson.put("messageNameControl",
       * GetDataControlFromValue.getDataControlClient(client, entry.getKey()));
       * arrayJson.put(oneJson); }
       */
      for (Entry<String, ArrayList<ErrorValidate>> entry : errorsAll.entrySet()) {
        ArrayList<ErrorValidate> myerror = entry.getValue();
        myerror.forEach((n) -> {
          JSONObject oneJson = new JSONObject();
          oneJson.put("messageErrorControl", n.getMsgEs());
          oneJson.put("messageValueControl", entry.getKey());
          oneJson.put("messageNameControl", GetDataControlFromValue.getDataControlClient(client, entry.getKey()));
          arrayJson.put(oneJson);
        });
      }
      response.getWriter().write((arrayJson).toString());
    }
  }

  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doPost(request, response);
  }
}
