import { FactoryLogo } from "./FactoryLogo.js";
import { FactoryTag } from "./FactoryTag.js";

export function FactoryBranding() {
  const API = {};

  const factoryLogo = new FactoryLogo();
  const factoryTag = new FactoryTag();

  let params = {};
  API.brandingIndex = function () {
    params.class = "logoRow";
    const section = factoryTag.section(params);
    const logoInformatica = factoryLogo.logoInformatica();
    const logoHarnina = factoryLogo.logoHarnina();
    section.appendChild(logoInformatica);
    section.appendChild(logoHarnina);
    return section;
  };
  return API;
}
