package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.sql.SQLException;

import com.example.demo.DAO.procedure.CallerClient;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class VerifyEmailClientTest {

  @Test
  void verify() throws ClassNotFoundException, SQLException {
    CallerClient callerClient = new CallerClient();
    assertEquals(callerClient.existEmail("luciano@bme.es"), true);
    assertEquals(callerClient.existEmail("luci@anobme.es"), false);
    assertEquals(callerClient.existEmail("elsergio130v@gmail.com"), true);

  }
}
