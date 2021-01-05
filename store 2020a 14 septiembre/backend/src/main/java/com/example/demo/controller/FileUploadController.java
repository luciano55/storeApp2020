package com.example.demo.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.SQLException;

import com.example.demo.DAO.procedure.CallerClient;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

//import javax.servlet.ServletContext;

@Controller
public class FileUploadController {

  @GetMapping("/nada")
  public String index() {
    return "upload";
  }

  @PostMapping("/uploadFile")
  public String uploadFile(@RequestParam("avatar") MultipartFile file, RedirectAttributes attributes)
      throws IOException {

    if (file == null || file.isEmpty()) {
      attributes.addFlashAttribute("message", "Por favor seleccione un archivo");
      return "redirect:status";
    }

    StringBuilder builder = new StringBuilder();
    builder.append(System.getProperty("user.dir"));
    builder.append(File.separator);
    // String a = ServletContext.getRealPath("");//
    // getServletContext().getRealPath("assets/img/client/")
    // builder.append(a);
    builder.append(File.separator);
    builder.append("store 2020a 14 septiembre/backend/target/classes/static/assets/img/client/");
    String filedestino = String.valueOf(
        RequestContextHolder.currentRequestAttributes().getAttribute("idClient", RequestAttributes.SCOPE_SESSION));
    builder.append(filedestino + ".png");
    // builder.append(file.getOriginalFilename());

    byte[] fileBytes = file.getBytes();
    Path path = Paths.get(builder.toString());
    Files.write(path, fileBytes);

    attributes.addFlashAttribute("message", "Archivo cargado correctamente [" + builder.toString() + "]");

    StringBuilder builder2 = new StringBuilder();

    builder2.append(System.getProperty("user.dir"));
    builder2.append(File.separator);
    // String a = ServletContext.getRealPath("");//
    // getServletContext().getRealPath("assets/img/client/")
    // builder.append(a);
    builder2.append(File.separator);
    builder2.append("store 2020a 14 septiembre/backend/src/main/resources/static/assets/img/client/");

    builder2.append(filedestino + ".png");
    // builder.append(file.getOriginalFilename());

    byte[] fileBytes2 = file.getBytes();
    Path path2 = Paths.get(builder2.toString());

    Files.write(path2, fileBytes2);

    attributes.addFlashAttribute("message",
        "Archivo cargado correctamente [" + builder2.toString() + "]" + "Cierra y recarga");

    // Add client historic
    try {
      CallerClient callerClient = new CallerClient();
      if (callerClient.addClientHistoric((int) RequestContextHolder.currentRequestAttributes().getAttribute("idClient",
          RequestAttributes.SCOPE_SESSION), "UpdateAvatar")) {
        System.out.println("UpdateAvatar registrado en histórico ");
      }

    } catch (ClassNotFoundException | SQLException e) {

      e.printStackTrace();
    }
    return "redirect:/status";

  }

  @GetMapping("/status")
  public String status() {
    return "status";
  }

}
