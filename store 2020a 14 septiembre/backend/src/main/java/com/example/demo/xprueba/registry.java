package com.example.demo.xprueba;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.jar.JarEntry;
import java.util.jar.JarInputStream;

public class registry {
  public static void main(String[] args) {
    getClassesInPackage("util");
  }

  public static final List<Class<?>> getClassesInPackage(String packageName) {
    String path = packageName.replaceAll("\\.", File.separator);
    List<Class<?>> classes = new ArrayList<>();
    String[] classPathEntries = System.getProperty("java.class.path").split(System.getProperty("path.separator"));

    String name;
    for (String classpathEntry : classPathEntries) {
      if (classpathEntry.endsWith(".jar")) {
        File jar = new File(classpathEntry);
        try {
          JarInputStream is = new JarInputStream(new FileInputStream(jar));
          JarEntry entry;
          while ((entry = is.getNextJarEntry()) != null) {
            name = entry.getName();
            if (name.endsWith(".class")) {
              if (name.contains(path) && name.endsWith(".class")) {
                String classPath = name.substring(0, entry.getName().length() - 6);
                classPath = classPath.replaceAll("[\\|/]", ".");
                classes.add(Class.forName(classPath));
              }
            }
          }
          is.close();
        } catch (Exception ex) {
          // Silence is gold
        }
      } else {
        try {
          File base = new File(classpathEntry + File.separatorChar + path);
          for (File file : base.listFiles()) {
            name = file.getName();
            if (name.endsWith(".class")) {
              name = name.substring(0, name.length() - 6);
              classes.add(Class.forName(packageName + "." + name));
            }
          }
        } catch (Exception ex) {
          // Silence is gold
        }
      }
    }

    return classes;
  }
}
