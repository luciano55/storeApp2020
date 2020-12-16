package com.example.demo.util;

public class HiloSendEmailAdd extends Thread {
  SendEmail sendemail;
  String email;
  String title;

  public HiloSendEmailAdd(String email, String title) {
    super("email");
    this.email = email;
    this.title = title;
    start();
  }

  public void run() {
    System.out.println("Iniciando sendEmail hilo.");
    sendemail = new SendEmail();
    sendemail.sendClient(this.email, title);
    System.out.println("SendEmail hilo finalizando.");
  }

}
