import { FactoryLogo } from "./factoryLogo.js";
import { FactoryTag } from "./factoryTag.js";

export function FactoryBranding() {
  const API = {};
  const factoryLogo = new FactoryLogo();
  const factoryTag = new FactoryTag();
  let params = {};

  API.images = function () {
    params.class = "logoRow";
    const section = factoryTag.section(params);
   section.appendChild(factoryLogo.informatica());  
   section.appendChild(factoryLogo.rotuloDiagonal());
   section.appendChild(factoryLogo.harnina());
    return section;
  };

  API.dices = function(){
    params.class = "contenido01";
    const section = factoryTag.section(params);
    params.class = "harnina";
    params.href = "https://iesarroyoharnina.educarex.es/";
    params.title = "I.E.S. Arroyo Harnina";
    section.appendChild(factoryLogo.dadoMedio(params));
    section.appendChild(factoryLogo.rotuloDiagonal());
    params.class = "informatica";
    params.href = "https://www.ccii.es/";
    params.title = "ingeniería informática";
    section.appendChild(factoryLogo.dadoMedio(params));
    return section;
  }
  return API;
}
