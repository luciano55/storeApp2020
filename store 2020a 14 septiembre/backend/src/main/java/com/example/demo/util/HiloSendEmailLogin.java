package com.example.demo.util;

import java.sql.SQLException;

public class HiloSendEmailLogin extends Thread {
  SendEmail sendemail;
  String email;

  public HiloSendEmailLogin(String email) {
    super("email");
    this.email = email;
    start();
  }

  public void run() {
    System.out.println("Iniciando sendEmail hilo.");
    sendemail = new SendEmail();
    try {
      sendemail.sendBlockClient(this.email);
    } catch (ClassNotFoundException | SQLException e) {
      e.printStackTrace();
    }
    System.out.println("SendEmail hilo finalizando.");
  }

}
