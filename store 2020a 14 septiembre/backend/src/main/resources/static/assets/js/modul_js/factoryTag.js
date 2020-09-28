//STORE2021.namespace("STORE2021.factoryTag");

export function FactoryTag() {
  const API = {};

  API.footer = function (params) {
    const footer = document.createElement("footer");
    footer.id = params.id || "";
    footer.className = params.class || "";
    footer.innerHTML = params.text || "";
    return footer;
  };

  API.p = function (params) {
    const p = document.createElement("p");
    p.id = params.id || "";
    p.className = params.class || "";
    p.innerHTML = params.text || "";
    return p;
  };
  API.button = function (params) {
    const button = document.createElement("buttom");
    button.id = params.id || "";
    button.className = params.class || "";
    button.innerHTML = params.text || "";
    button.type = "button";
    return button;
  };
  API.span = function (params) {
    const span = document.createElement("span");
    span.id = params.id || "";
    span.className = params.class || "";
    span.innerHTML = params.text || "";
    return span;
  };

  return API;
}
