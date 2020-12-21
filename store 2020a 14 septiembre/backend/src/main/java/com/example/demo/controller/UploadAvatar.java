package com.example.demo.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.*;
import java.io.File;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.context.request.RequestAttributes;

@WebServlet("/uploadFile4444")
@MultipartConfig
public class UploadAvatar extends HttpServlet {

  private static final long serialVersionUID = 1L;

  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    System.out.println("inicio uploadAvatar");

    Part filePart = request.getPart("avatar");
    String filedestino = String.valueOf(
        RequestContextHolder.currentRequestAttributes().getAttribute("idClient", RequestAttributes.SCOPE_SESSION));
    System.out.println("filedestino: " + filedestino);
    if (filePart == null) {
      System.out.println("Seleccione un archivo");
    } else {
      String origen = getServletContext().getRealPath("assets/img/client/");
      StringBuilder builder = new StringBuilder();
      builder.append(System.getProperty(origen));
      builder.append(File.separator);
      builder.append(filedestino + ".png");
      MultipartFile p = (MultipartFile) filePart;
      byte[] fileBytes = p.getBytes();
      Path path = Paths.get(builder.toString());
      Files.write(path, fileBytes);
      System.out.println("Uploader imerg ok");
    }

  }
  /*
   * new ImageCharger(filePart,
   * getServletContext().getRealPath("assets/img/client/"),
   * filedestino).clientFotoLoad(); }
   * 
   * /* if (validateForm(request)) { Part filePart = request.getPart("avatar");
   * new ImageCharger(filePart,
   * getServletContext().getRealPath("assets/img/client/"), String.valueOf(
   * RequestContextHolder.currentRequestAttributes().getAttribute("idClient",
   * RequestAttributes.SCOPE_SESSION))) .clientFotoLoad(); }
   */

  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doPost(request, response);
  }
  /*
   * // Método para validar que el formulario contiene los parámetros correctos
   * private boolean validateForm(HttpServletRequest request) throws IOException,
   * ServletException { System.out.println("validateForm"); if
   * (request.getParts().size() >= 4 && request.getPart("name") != null &&
   * request.getPart("detail") != null && request.getPart("send") != null) {
   * return true; } return false; }
   */
}
