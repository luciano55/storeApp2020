package com.example.demo.xprueba;

import java.util.*;
import java.util.zip.*;
import java.io.*;

public class PackageReflection {
  public static void main(String[] args) {
    ArrayList<String> paths = getLibraryPaths();
    for (String path : paths) {
      if (path.endsWith(".jar") || path.endsWith(".zip")) {
        try {
          ArrayList<String> classNames = getClassNamesInFile(path);
          for (String className : classNames) {
            System.out.println(className);
          }
        } catch (IOException e) {
          continue;
        }
      }
    }
  }

  public static ArrayList<String> getLibraryPaths() {
    ArrayList<String> paths = new ArrayList<String>();
    String path = System.getProperty("java.home") + File.separator + ".." + File.separator + "Classes" + File.separator;
    File dir = new File(path);
    File[] files = dir.listFiles();
    for (File file : files) {
      paths.add(file.getAbsolutePath());
    }
    return paths;
  }

  public static ArrayList<String> getClassNamesInFile(String path) throws IOException {
    ArrayList<String> classNames = new ArrayList<String>();
    ZipFile file = new ZipFile(path);
    Enumeration<? extends ZipEntry> entries = file.entries();
    while (entries.hasMoreElements()) {
      ZipEntry entry = entries.nextElement();
      if (entry != null && entry.getName().endsWith(".class")) {
        classNames.add(entry.getName());
      }
    }
    file.close();
    return classNames;
  }
}
