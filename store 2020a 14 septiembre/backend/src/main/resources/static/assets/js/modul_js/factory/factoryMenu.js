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
    API.client = function () {
    const href = [
      "#",
      "#",
      "#",
      "#",
        "#",
    ];
    const text = ["Update Data", "Update Login", "Update Avatar", "Store","Exit"];
    const id = ["linkUpData", "linkUpLogin", "linkUpAvatar", "linkStore","linkExit"];
    params.class ="menu ";
    params.id = "menuClient";
    const nav = factoryTag.nav(params);
    params = {};
    params.class= "m-3 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-orange-600 hover:bg-orange-900"
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
