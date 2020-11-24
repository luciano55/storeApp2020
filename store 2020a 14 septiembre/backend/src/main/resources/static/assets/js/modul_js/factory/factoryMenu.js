import { FactoryTag } from "./factoryTag.js";
export function FactoryMenu() {
  const API = {};
  const factoryTag = new FactoryTag();
  let params = {};

  API.index = function () {
    const href = [
      "assets/subpage/home.html",
      "#",
      "#",
      "assets/subpage/contacto.html",
    ];
    const text = ["home", "Login", "Register", "Contacto"];
    const id = ["linkHome", "linkLogin", "linkRegister", "linkContacto"];
    params.class = "menu";
    const nav = factoryTag.nav(params);
    params = {};
    for (let i = 0; i < href.length; i++) {
      params.href = href[i];
      params.text = text[i];
      params.id = id[i];
      const a = factoryTag.a(params);
      nav.appendChild(a);
    }
    return nav;
  };
  return API;
}
