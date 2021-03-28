package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.sql.SQLException;

//import java.sql.SQLException;

import com.example.demo.DAO.procedure.CallerClient;
import com.example.demo.entity.Login;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class VerifyCheckingLoginClientTest {

  @Test
  void verify() {
    try {
      Login login = new Login("T752020", "Tt_305433");
      System.out.println("User: " + login.getUser());
      System.out.println("Password: " + login.getPassword());
      CallerClient callerClient = new CallerClient();
      System.out.println(callerClient.checkingLoginClient(login));
      assertEquals(login.getUser(), "T752020");
      assertEquals(callerClient.checkingLoginClient(login), true);
    } catch (ClassNotFoundException | SQLException e) {

      e.printStackTrace();
    }

  }
}
