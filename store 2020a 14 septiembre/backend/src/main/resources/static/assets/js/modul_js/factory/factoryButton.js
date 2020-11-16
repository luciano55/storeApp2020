import { FactoryTag } from "./factoryTag.js";

export function FactoryButton() {
  const API = {};
 
  const factoryTag = new FactoryTag();
 
  API.hamburger = function () {
     let params = {};
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

   let params = {};
    params.class = "body-darkLight";
    const button = factoryTag.div(params);
    params.class = "form-darkLight";
    const form = factoryTag.form(params);

    params.id = "darkMode";
    params.class = "toggle";
    params.type = "checkbox";
    params.name = "Dark mode";
    params.value = "light";
    //params.required = false;
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
    button.appendChild(form);
    return button;
  };
  API.scrollTop = function () {
     let params = {};
    params.class = "scroll-top-btn hidden";
    params.text= "&#11014;";
    const button = factoryTag.button(params);
    return button;

    //<button class="scroll-top-btn hidden">&#11014;</button>
  };
  API.submit = function (display) {
    const button = document.createElement("input");
    button.id = "submit";
    button.type = "submit";
    button.value = "Send";
    button.style.display= display || "block";
    return button;
  };
  

  return API;
}

function humburgerIcon(e) {
  
  if (
    e.target.matches(".humburger-btn") ||
    e.target.matches(`${".humburger-btn"} *`)
  ) {
    let $header = document.getElementById("myHeader");
    document.querySelector(".humburger-btn").classList.toggle("is-active");
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
