package com.example.demo.util;

import javax.servlet.ServletException;
import javax.servlet.http.Part;
import java.io.*;

public class ImageCharger {

  private String fileName;
  private Part filePart;
  private String nameImage;
  private String path;

  public ImageCharger(Part filePart, String path, String nameImage) throws IOException, ServletException {
    this.filePart = filePart;
    this.fileName = getFileName(filePart);
    this.nameImage = nameImage;
    this.path = path;
  }
  // el filePart se obtiene request.getPart("imagenCliente")
  // el path getServletContext().getRealPath("img/fotoClient/");

  public void clientFotoLoad() throws IOException, ServletException {
    System.out.println("ini clientFotoLoad");
    System.out.println("fileName.length()" + fileName.length());

    if (fileName.length() > 2) {

      fileName = nameImage + ".png";

      File folder = new File(path);
      if (!folder.exists()) {
        folder.mkdirs();
      }
      FileOutputStream fs = new FileOutputStream(new File(path + "/" + fileName));
      BufferedOutputStream buf = new BufferedOutputStream(fs);

      InputStream fileContent = filePart.getInputStream();
      BufferedInputStream bufIN = new BufferedInputStream(fileContent);

      byte[] buffer = new byte[8 * 1024];
      int bytesRead;
      while ((bytesRead = bufIN.read(buffer)) != -1) {
        buf.write(buffer, 0, bytesRead);
        System.out.println("While");
      }
      buf.close();
      bufIN.close();
    }
  }

  public String getFileName(Part filePart) {
    System.out.println("content-disposition" + filePart.getHeader("content-disposition"));
    for (String cd : filePart.getHeader("content-disposition").split(";")) {
      System.out.println("cd" + cd);
      if (cd.trim().startsWith("filename")) {
        System.out.println("cd.trim().startsWith(filename)" + cd.trim().startsWith("filename"));
        return cd.substring(cd.indexOf('=') + 1).trim().replace("\"", "");
      }
    }
    return "fotoSin.jpg";
  }
}
