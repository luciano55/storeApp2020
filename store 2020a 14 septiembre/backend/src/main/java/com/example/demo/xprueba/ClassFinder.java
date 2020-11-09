package com.example.demo.xprueba;

/*
 * import java.io.File;
 * 
 * import java.io.IOException;
 * 
 * import java.io.UnsupportedEncodingException;
 * 
 * import java.net.URL;
 * 
 * import java.net.URLClassLoader;
 * 
 * import java.net.URLDecoder;
 * 
 * import java.util.ArrayList;
 * 
 * import java.util.Enumeration;
 * 
 * import java.util.HashMap;
 * 
 * import java.util.List;
 * 
 * import java.util.jar.JarEntry;
 * 
 * import java.util.jar.JarFile;
 * 
 * public class ClassFinder { public static void main(String[] args) throws
 * ClassNotFoundException {
 * 
 * List<Class> classes = ClassFinder.getClassesFromPackage("YOUR PACKAGE NAME");
 * 
 * System.out.println("START ClassList:");
 * 
 * for (Class c : classes) {
 * 
 * System.out.println(c.toString());// + ” ” + c.getCanonicalName());
 * 
 * }
 * 
 * System.out.println("END ClassList:");
 * 
 * }
 * 
 * public static List getClassesFromPackage(String pckgname) throws
 * ClassNotFoundException {
 * 
 * ArrayList result = new ArrayList();
 * 
 * ArrayList<File> directories = new ArrayList();
 * 
 * HashMap packageNames = null;
 * 
 * try {
 * 
 * for (URL jarURL : ((URLClassLoader)
 * Thread.currentThread().getContextClassLoader()).getURLs()) {
 * 
 * System.out.println("JAR: " + jarURL.getPath());
 * 
 * getClassesInSamePackageFromJar(result, pckgname, jarURL.getPath());
 * 
 * String path = pckgname; ClassLoader cld =
 * Thread.currentThread().getContextClassLoader(); Enumeration<URL> resources =
 * cld.getResources(path);
 * 
 * File directory = null;
 * 
 * while (resources.hasMoreElements()) {
 * 
 * String path2 = resources.nextElement().getPath();
 * 
 * directory = new File(URLDecoder.decode(path2, "UTF-8"));
 * 
 * directories.add(directory);
 * 
 * } if (packageNames == null) {
 * 
 * packageNames = new HashMap();
 * 
 * }
 * 
 * packageNames.put(directory, pckgname);
 * 
 * }
 * 
 * } catch (NullPointerException x) {
 * 
 * throw new ClassNotFoundException(pckgname +
 * " does not appear to be a valid package (Null pointer exception)");
 * 
 * } catch (UnsupportedEncodingException encex) {
 * 
 * throw new ClassNotFoundException(pckgname +
 * " does not appear to be a valid package (Unsupported encoding)");
 * 
 * } catch (IOException ioex) {
 * 
 * throw new
 * ClassNotFoundException("IOException was thrown when trying to get all resources for "
 * + pckgname);
 * 
 * }
 * 
 * for (File directory : directories) {
 * 
 * if (directory.exists()) {
 * 
 * String[] files = directory.list();
 * 
 * for (String file : files) {
 * 
 * if (file.endsWith(".class")) {
 * 
 * try {
 * 
 * // System.out.println(packageNames.get(directory).toString() + ‘.’ + //
 * file.substring(0, file.length() – 6));
 * 
 * result.add( Class.forName(packageNames.get(directory).toString() + '.' +
 * file.substring(0, file.length() - 6)));
 * 
 * } catch (Throwable e) {
 * 
 * }
 * 
 * }
 * 
 * }
 * 
 * } else {
 * 
 * throw new ClassNotFoundException( pckgname + " (" + directory.getPath() +
 * ") does not appear to be a valid package");
 * 
 * }
 * 
 * }
 * 
 * return result; }
 * 
 * /**
 *
 * 
 * 
 * Returns the list of classes in the same directories as Classes in
 * 
 * classes.
 *
 * 
 * 
 * @param result
 * 
 * @param classes
 * 
 * @param jarPath
 *
 * 
 * 
 */
/*
 * private static void getClassesInSamePackageFromJar(List result, String
 * packageName, String jarPath) {
 * 
 * JarFile jarFile = null;
 * 
 * try {
 * 
 * jarFile = new JarFile(jarPath);
 * 
 * Enumeration<JarEntry> en = jarFile.entries();
 * 
 * while (en.hasMoreElements()) {
 * 
 * JarEntry entry = en.nextElement();
 * 
 * String entryName = entry.getName();
 * 
 * packageName = packageName.replace('.', '/');
 * 
 * if (entryName != null && entryName.endsWith(".class") &&
 * entryName.startsWith(packageName)) {
 * 
 * try {
 * 
 * Class entryClass = Class.forName(entryName.substring(0, entryName.length() -
 * 6).replace('/', '/'));
 * 
 * if (entryClass != null) {
 * 
 * result.add(entryClass);
 * 
 * }
 * 
 * } catch (Throwable e) {
 * 
 * // do nothing, just continue processing classes
 * 
 * }
 * 
 * }
 * 
 * }
 * 
 * } catch (Exception e) {
 * 
 * } finally {
 * 
 * try {
 * 
 * if (jarFile != null) {
 * 
 * jarFile.close();
 * 
 * }
 * 
 * } catch (Exception e) {
 * 
 * }
 * 
 * }
 * 
 * }
 * 
 * }
 */