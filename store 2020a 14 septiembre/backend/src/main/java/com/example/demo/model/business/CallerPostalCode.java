package com.example.demo.model.business;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.demo.DAO.GetConnectionMySql;

import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;

public class CallerPostalCode extends GetConnectionMySql {
  public CallerPostalCode() throws SQLException, ClassNotFoundException {
    super();
  }

  public JSONArray getPostalCodeExtremadura() {
    ResultSet results = null;
    JSONArray cpsJson = new JSONArray();
    try {
      CallableStatement cstmt = (CallableStatement) connection.prepareCall("{call getCp()}");
      try {
        results = cstmt.executeQuery();
        while (results.next()) {
          JSONObject oneJson = new JSONObject();
          oneJson.put("postalCode", results.getString("cp"));
          oneJson.put("municipality", results.getString("municipality"));
          cpsJson.add(oneJson);
        }
        return cpsJson;
      } finally {
        if (cstmt != null) {
          cstmt.close();
        }
      }
    } catch (Exception ignore) {
    }
    return cpsJson;
  }
}
