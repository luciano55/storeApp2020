package com.example.demo.validate.validable;

import java.util.Set;

import com.example.demo.validate.validable.regexp.RegularExpressionValidation;

import org.reflections.Reflections;

public class ReflectionGetClassPak {
  public static void main(String args[]) {
    System.out.println("hola");

    Reflections reflections = new Reflections("com.example.demo.validate.validable.regexp");

    Set<Class<? extends RegularExpressionValidation>> allClasses = reflections
        .getSubTypesOf(RegularExpressionValidation.class);
    System.out.println(allClasses.size());
    allClasses.forEach(System.out::println);
    System.out.println(allClasses.size());
    allClasses.forEach(element -> System.out.println(element));

  }

}
