//STORE2021.namespace("STORE2021.FactoryHeader");

import { FactoryTag } from "./factoryTag.js";

const myfactoryTag = new FactoryTag();

export function FactoryHeader() {
  var params = {
    class: "hamburger-inner",
  };
  var spanInner = myfactoryTag.span(params);
  params.class = "hamburger-box";
  var spanExt = myfactoryTag.span(params);
  params.class = "humburger-btn hamburger hamburger--vortex";
  params.id = "humburgerIcon";
  var button = myfactoryTag.button(params);

  spanExt.appendChild(spanInner);
  button.appendChild(spanExt);

  document.getElementById("myHeader").appendChild(button);
  console.log(document.getElementById("myHeader"));
}
