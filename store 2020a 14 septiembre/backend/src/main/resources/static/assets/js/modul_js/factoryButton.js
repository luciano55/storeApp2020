import { FactoryTag } from "./factoryTag.js";
export function FactoryButton() {
  const API = {};
  const d = document,
    ls = localStorage;
  var sw = 0;

  const factoryTag = new FactoryTag();
  let params = {};
  API.hamburgerButton = function () {
    params.class = "hamburger-inner";
    const spanIn = factoryTag.span(params);
    params.class = "hamburger-box";
    const spanEx = factoryTag.span(params);
    params.class = "humburger-btn hamburger hamburger--Vortex";
    params.id = "humburgerIcon";
    const button = factoryTag.button(params);
    button.addEventListener("click", humburgerIcon);
    spanEx.appendChild(spanIn);
    button.appendChild(spanEx);
    return button;
  };
  API.darkLight = function () {
    const form = factoryTag.form(params);
    params.id = "darkMode";
    params.class = "toggle";
    params.type = "checkbox";
    params.name = "Dark mode";
    params.value = "light";
    const input = factoryTag.input(params);
    input.setAttribute("role", "switch");
    params = {};
    params.for = "dark-mode";
    params.class = "sr";
    params.text = "Dark Mode";
    const label = factoryTag.label(params);
    params = {};
    params.class = "curtain";
    const div = factoryTag.div(params);
    form.appendChild(input);
    form.appendChild(label);
    form.appendChild(div);

    return form;
  };
  return API;
}

function humburgerIcon(e) {
  const d = document;
  if (
    e.target.matches(".humburger-btn") ||
    e.target.matches(`${".humburger-btn"} *`)
  ) {
    let $header = d.getElementById("myHeader");
    d.querySelector(".humburger-btn").classList.toggle("is-active");
    if ($header.computedStyleMap().get("position") == "fixed") {
      $header.style.position = "relative";
      $header.style.opacity = "1";
      $header.style.zIndex = "999";
    } else {
      $header.style.position = "fixed";
      $header.style.opacity = "0";
      $header.style.zIndex = "-99";
    }
  }
}
