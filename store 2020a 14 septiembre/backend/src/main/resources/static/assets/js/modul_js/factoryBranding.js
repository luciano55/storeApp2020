import { FactoryLogo } from "./factoryLogo.js";
import { FactoryTag } from "./factoryTag.js";

export function FactoryBranding() {
  const API = {};
  const factoryLogo = new FactoryLogo();
  const factoryTag = new FactoryTag();
  let params = {};

  API.index = function () {
    params.class = "logoRow";
    const section = factoryTag.section(params);

    section.appendChild(factoryLogo.informatica());
    section.appendChild(factoryLogo.rotuloDiagonal());
    section.appendChild(factoryLogo.harnina());

    return section;
  };
  return API;
}
