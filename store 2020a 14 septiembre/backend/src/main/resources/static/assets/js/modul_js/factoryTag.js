export function FactoryTag() {
  const API = {};
  API.a = function (params) {
    const a = document.createElement("a");
    a.id = params.id || "";
    a.className = params.class || "";
    a.href = params.href || "";
    a.target = params.target || "";
    a.title = params.title || "";
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
    button.type = "button";
    return button;
  };
  API.footer = function (params) {
    const footer = document.createElement("footer");
    footer.id = params.id || "";
    footer.className = params.class || "";
    footer.innerHTML = params.text || "";
    return footer;
  };
  API.image = function (params) {
    const img = document.createElement("img");
    img.id = params.id || "";
    img.className = params.class || "";
    img.src = params.src || "";
    img.alt = params.alt || "";
    return img;
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

  API.span = function (params) {
    const span = document.createElement("span");
    span.id = params.id || "";
    span.className = params.class || "";
    span.innerHTML = params.text || "";
    return span;
  };

  return API;
}
