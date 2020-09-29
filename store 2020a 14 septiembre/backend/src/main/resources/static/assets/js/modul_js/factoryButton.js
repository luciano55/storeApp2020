import { FactoryTag } from "./factoryTag.js";
export function FactoryButton() {
  const API = {};

  const factoryTag = new FactoryTag();
  const params = {};
  API.hamburgerButton = function () {
    params.class = "hamburger-inner";
    const spanIn = factoryTag.span(params);
    params.class = "hamburger-box";
    const spanEx = factoryTag.span(params);
    params.class = "humburger-btn hamburger hamburger--Vortex";
    params.id = "humburgerIcon";
    const button = factoryTag.button(params);
    spanEx.appendChild(spanIn);
    button.appendChild(spanEx);
    return button;
  };
  return API;
}
export function humburgerIcon() {
  const d = document;
  d.addEventListener("click", (e) => {
    if (
      e.target.matches(".humburger-btn") ||
      e.target.matches(`${".humburger-btn"} *`)
    ) {
      let $header = d.getElementById("myHeader");
      d.querySelector(".humburger-btn").classList.toggle("is-active");

      //alert($header.computedStyleMap().get("position"));

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
  });
}
