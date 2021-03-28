package com.example.demo.reflection.pak;
/*
 * import java.lang.reflect.Field; import
 * java.lang.reflect.InvocationTargetException; import java.lang.reflect.Method;
 * import java.text.ParseException; import java.text.SimpleDateFormat; import
 * java.util.HashMap;
 * 
 * public class HasMapTransferObject {
 * 
 * // POSIBLEMENTE EL METODO MAS FEO DEL MUNDO .. PERO NECESARIO.. NO HAY UNA
 * FORMA // SIMPLE DE CASTEAR OBJETOS A TIPOS PRIMITIVOS // HE PROVADO COGIENDO
 * EL TIPO DEL ARGUMENTO DEL METODO PERO NO SE PUEDE CASTEAR // CON UN TIPO DE
 * LA CLASE TYPE NI CLASS public Object crearPojo(HashMap<String, Object>
 * datosFila, String clasePojo) throws ClassNotFoundException,
 * IllegalAccessException, InstantiationException, InvocationTargetException,
 * ParseException {
 * 
 * Object genericObject = Class.forName(clasePojo).newInstance();
 * 
 * Method[] metodosDeclarados = genericObject.getClass().getDeclaredMethods();
 * 
 * Field[] atributos = genericObject.getClass().getDeclaredFields();
 * 
 * for (int i = 0; i < metodosDeclarados.length; i++) { for (int j = 0; j <
 * atributos.length; j++) { if
 * (metodosDeclarados[i].getName().toLowerCase().contains("set" +
 * atributos[j].getName().toLowerCase())) {
 * ejecutarSet(datosFila.get(atributos[j].getName().toLowerCase()),
 * genericObject, metodosDeclarados[i]); } } } return genericObject; }
 * 
 * private void ejecutarSet(Object dato, Object genericObject, Method
 * metodosDeclarado) throws IllegalAccessException, InvocationTargetException {
 * String tipo = String.valueOf(metodosDeclarado.getParameters()[0].getType());
 * try { switch (tipo) { case "class java.lang.String":
 * metodosDeclarado.invoke(genericObject, dato); // .toString())); break; case
 * "int": metodosDeclarado.invoke(genericObject,
 * Integer.valueOf(String.valueOf(dato))); // .toString())); break; case "byte":
 * metodosDeclarado.invoke(genericObject, Byte.valueOf(String.valueOf(dato)));
 * break; case "float": metodosDeclarado.invoke(genericObject,
 * Float.valueOf(String.valueOf(dato))); break; case "long":
 * metodosDeclarado.invoke(genericObject, Long.valueOf(String.valueOf(dato)));
 * break; case "double": metodosDeclarado.invoke(genericObject,
 * Double.valueOf(String.valueOf(dato))); break; case "char":
 * metodosDeclarado.invoke(genericObject,
 * Character.valueOf(String.valueOf(dato).charAt(0))); break; case "boolean":
 * metodosDeclarado.invoke(genericObject,
 * Boolean.valueOf(String.valueOf(dato))); break; default:
 * metodosDeclarado.invoke(genericObject, dato); // .toString())); } } catch
 * (IllegalArgumentException e) { SimpleDateFormat simpleFormat = new
 * SimpleDateFormat("dd/MM/yyyy"); String dateFormat =
 * simpleFormat.format(dato); metodosDeclarado.invoke(genericObject,
 * dateFormat); } }
 * 
 * }
 */