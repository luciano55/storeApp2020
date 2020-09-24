var $ = function (string) {
  return document.getElementById(string);
};

var STORE2021 = STORE2021 || {};

STORE2021.namespace = function (namespace) {
  var parts = namespace.split(".");
  var parent = STORE2021;
  var i;
  if (parts[0] === "STORE2021") {
    parts = parts.slice(1);
  } else return false;
  for (i = 0; i < parts.length; i += 1) {
    if (typeof parent[parts[i]] === "undefined") {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }
  return parent;
};

STORE2021.namespace("STORE2021.includeBranchHTML");

STORE2021.includeBranchHTML = function (selector, prop) {
  const includeHTML = (el, url) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {
        el.outerHTML = xhr.responseText;
      } else {
        let message =
          xhr.statusText ||
          "Error loading the file, verify that you are making the request by http or https";
        el.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`;
      }
    });

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
    xhr.send();
  };

  document
    .querySelectorAll(selector)
    .forEach((el) => includeHTML(el, el.getAttribute(prop)));
};

STORE2021.namespace("STORE2021.Ajax");
(function (g) {
  "use strict";

  STORE2021.Ajax = {
    READY_STATE_UNINITIALIZED: 0,
    READY_STATE_LOADING: 1,
    READY_STATE_LOADED: 2,
    READY_STATE_INTERACTIVE: 3,
    READY_STATE_COMPLETE: 4,
  };
  // Constructor
  STORE2021.Ajax.CargadorContenidos = function (
    url,
    funcion,
    json,
    funcionError
  ) {
    this.url = url;
    this.req = null; // el objeto asincrono (XMLHTTP)
    this.json = json || "";
    this.onload = funcion;
    this.onerror = funcionError ? funcionError : this.defaultError;
    this.cargaContenidoXML(url);
  };

  STORE2021.Ajax.CargadorContenidos.prototype = {
    cargaContenidoXML: function (url) {
      if (window.XMLHttpRequest) {
        this.req = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        this.req = new ActiveXObject("Microsoft.XMLHTTP");
      }

      if (this.req) {
        try {
          var loader = this; //that = loader
          this.req.onreadystatechange = function () {
            loader.onReadyState.call(loader);
          };
          this.req.open("GET", url, true);
          this.req.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded; charset=UTF-8"
          );
          this.req.send("json=" + this.json);
        } catch (err) {
          this.onerror.call(this);
        }
      }
    },

    onReadyState: function () {
      var req = this.req;
      var ready = req.readyState;
      if (ready == STORE2021.Ajax.READY_STATE_COMPLETE) {
        var httpStatus = req.status;
        if (httpStatus == 200 || httpStatus == 0) {
          this.onload.call(this);
        } else {
          this.onerror.call(this);
        }
      }
    },

    defaultError: function () {
      alert(
        "Se ha producido un error al obtener los datos" +
          "\n\nreadyState:" +
          this.req.readyState +
          "\nstatus: " +
          this.req.status +
          "\nheaders: " +
          this.req.getAllResponseHeaders()
      );
    },
  };
})(window);
