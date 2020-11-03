export function FactoryTag() {
  const API = {};
  var h = function (params) {
    var h = document.createElement(params.h);
    h.id = params.id || "";
    h.className = params.class || "";
    h.innerText = params.text || "";
    return h;
  };
  API.a = function (params) {
    const a = document.createElement("a");
    a.id = params.id || "";
    a.className = params.class || "";
    a.href = params.href || "";
    a.target = params.target || "";
    a.title = params.title || "";
    a.innerHTML = params.text || "";
    return a;
  };
  API.article = function (params) {
    const article = document.createElement("article");
    article.id = params.id || "";
    article.className = params.class || "";
    return article;
  };
  API.button = function (params) {
    const button = document.createElement("button");
    button.id = params.id || "";
    button.className = params.class || "";
    button.title = params.text || "";
    button.value = params.value || "";
    button.innerHTML = params.text || "";
    button.type = "button";
    return button;
  };
  API.div = function (params) {
    const div = document.createElement("div");
    div.id = params.id || "";
    div.className = params.class || "";
    div.innerHTML = params.text || "";
    return div;
  };
  API.footer = function (params) {
    const footer = document.createElement("footer");
    footer.id = params.id || "";
    footer.className = params.class || "";
    footer.innerHTML = params.text || "";
    return footer;
  };
  API.form = function (params) {
    const form = document.createElement("form");
    form.id = params.id || "";
    form.className = params.class || "";
    form.name = params.name || "";
    form.action = params.action || "";
    form.autocomplete = params.autocomplete || "on";
    //form.enctype = params.enctype || "text/plain";
    form.method = params.method || "POST";
    form.target = params.target || "_blank";
    //form.submit();
    return form;
  };
  API.img = function (params) {
    const img = document.createElement("img");
    img.id = params.id || "";
    img.className = params.class || "";
    img.src = params.src || "";
    img.alt = params.alt || "";
    return img;
  };
  API.h1 = function (params) {
    params.h = "h1";
    return h(params);
  };
  API.h2 = function (params) {
    params.h = "h2";
    return h(params);
  };
  API.h3 = function (params) {
    params.h = "h3";
    return h(params);
  };
  API.h4 = function (params) {
    params.h = "h4";
    return h(params);
  };
  API.h5 = function (params) {
    params.h = "h5";
    return h(params);
  };
  API.h6 = function (params) {
    params.h = "h6";
    return h(params);
  };
  API.input = function (params) {
    var input = document.createElement("input");
    input.id = params.id;
    if (params.validate){
              input.setAttribute("data-validate", params.validate);     
    }    
    input.className = params.class || "";
    input.type = params.type || "";
    input.name = params.name || "";
    input.value = params.value || "";
    input.size = params.size || 20;
    //input.setAttribute("role", params.role);
    input.minLength = params.minLength || 5;
    input.maxLength = params.maxLength || 524288;
   input.required  = params.required || "";
   input.placeholder = params.placeholder || "";
    input.title = params.title || "";
    input.pattern = params.pattern || "";

    return input;
  };
  API.label = function (params) {
    var label = document.createElement("label");
    label.id = params.id;
    label.className = params.class || "";
    label.htmlFor = params.for || "";
    label.innerHTML = params.text || "";
    label.dataset.change = params.change || "";
    return label;
  };
  API.legend = function (params) {
    var legend = document.createElement("legend");
    legend.id = params.id;
    legend.className = params.class || "";
    legend.htmlFor = params.for || "";
    legend.innerHTML = params.text || "";
    legend.dataset.change = params.change || "";
    return legend;
  };
  API.nav = function (params) {
    const nav = document.createElement("nav");
    nav.id = params.id || "";
    nav.className = params.class || "";
    nav.innerHTML = params.text || "";
    return nav;
  };
  API.p = function (params) {
    const p = document.createElement("p");
    p.id = params.id || "";
    p.className = params.class || "";
    p.innerHTML = params.text || "";
    return p;
  };

  API.section = function (params) {
    const section = document.createElement("section");
    section.id = params.id || "";
    section.className = params.class || "";
    section.innerHTML = params.text || "";
    return section;
  };
 API.select = function(params){
        var select = document.createElement("select");
        select.id = params.id || "";
        select.className = params.class || "";
        return select;
    };

  API.span = function (params) {
    const span = document.createElement("span");
    span.id = params.id || "";
    span.className = params.class || "";
    span.innerHTML = params.text || "";
    span.title = params.title || "";
    return span;
  };
  API.svg = function (params) {
    const svg = document.createElement("svg");
    svg.id = params.id || "";
    svg.className = params.class || "";
    svg.innerHTML = params.text || "";
    //svg.height = params.height || "";
    //svg.width = params.width || "";
    return svg;
  };
  API.text = function (params) {
    const text = document.createElement("text");
    text.id = params.id || "";
    text.className = params.class || "";
    text.innerHTML = params.text || "";
    text.x = params.x || "";
    text.y = params.y || "";
    text.fill = params.fill || "";
    text.transform = params.transform || "";
    return text;
  };
  return API;
}
