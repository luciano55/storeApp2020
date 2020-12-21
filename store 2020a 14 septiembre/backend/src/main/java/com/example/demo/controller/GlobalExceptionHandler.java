package com.example.demo.controller;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MultipartException;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@ControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(MultipartException.class)
  public String handleMultipart(MultipartException e, RedirectAttributes attributes) {
    attributes.addFlashAttribute("message", e.getCause().getMessage());
    System.out.println("Error MultipartException");
    return "redirect:/index";
  }
}
