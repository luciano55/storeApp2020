import { FactoryTag } from "./factoryTag.js";

export function FactoryBox() {
  const factoryTag = new FactoryTag();

  const d = document;
  const API = {};
  let params = {};

  API.error = function () {
    params.id = "errorBox";
    params.class = "box-error none";
    return factoryTag.div(params);
  };

  return API;
}
