package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

@RestController
public class IndexController {
  @GetMapping("/index")
  public String index() {
    String myActivePage = "";
    String myIdSession = "";
    int myVisit = 0;
    String html = "";

    if (RequestContextHolder.currentRequestAttributes().getAttribute("activePage",
        RequestAttributes.SCOPE_SESSION) == null) {
      RequestContextHolder.currentRequestAttributes().setAttribute("activePage", "index",
          RequestAttributes.SCOPE_SESSION);
      RequestContextHolder.currentRequestAttributes().setAttribute("idSession",
          RequestContextHolder.currentRequestAttributes().getSessionId(), RequestAttributes.SCOPE_SESSION);
      RequestContextHolder.currentRequestAttributes().setAttribute("visit", 0, RequestAttributes.SCOPE_SESSION);

      myActivePage = (String) RequestContextHolder.currentRequestAttributes().getAttribute("activePage",
          RequestAttributes.SCOPE_SESSION);
      myIdSession = (String) RequestContextHolder.currentRequestAttributes().getAttribute("idSession",
          RequestAttributes.SCOPE_SESSION);
      html = "listo Hola Mundo primera vez myActivePage: " + myActivePage + " myIdSession: " + myIdSession;
    }
    if (RequestContextHolder.currentRequestAttributes().getAttribute("idSession",
        RequestAttributes.SCOPE_SESSION) == RequestContextHolder.currentRequestAttributes().getSessionId()) {
      myIdSession = (String) RequestContextHolder.currentRequestAttributes().getAttribute("idSession",
          RequestAttributes.SCOPE_SESSION);
      myVisit = (int) RequestContextHolder.currentRequestAttributes().getAttribute("visit",
          RequestAttributes.SCOPE_SESSION);
      myVisit++;
      RequestContextHolder.currentRequestAttributes().setAttribute("visit", myVisit, RequestAttributes.SCOPE_SESSION);

      html = "A la pagina " + myActivePage + " llevas " + myVisit + " visitas con id de session: " + myIdSession;

    }
    return html;

  }
}
