import { FactoryTag } from "../factory/factoryTag.js";
import { FactoryLogo } from "../factory/factoryLogo.js";
import { FactoryFrame } from "../factory/factoryFrame.js";

export function ViewHome() {
  const factoryTag = new FactoryTag();
  const factoryLogo = new FactoryLogo();
  const factoryFrame = new FactoryFrame();
  
  let params = {};
  params.id = "myHome";
  const divHome = factoryTag.div(params);
  params = {};
  params.class = "subhome";
  const divSubHome = factoryTag.div(params);
  params = {};
  params.text = "I.E.S. Arroyo Harnina";
  const ies = factoryTag.h1(params);
  params = {};
  params.text = "STORE HARNINA";
  const storeHarnina = factoryTag.h1(params);
  divSubHome.appendChild(ies);
  divSubHome.appendChild(factoryLogo.harnina());
  divHome.appendChild(divSubHome);
  divHome.appendChild(factoryFrame.weatherLocation());
  params = {};
  const divReturn = factoryTag.div(params);
  divReturn.appendChild(divHome);
  divReturn.appendChild(storeHarnina);
  params = {};
  params.text =
    "STORE HARNINA es una aplicación desarrollada por el ciclo DAM para el curso 2020-2021";
  const p = factoryTag.p(params);
  divReturn.appendChild(p);
  params = {};
  params.src = "https://placeimg.com/720/480/animals";
  params.alt = "Animals";
  const img = factoryTag.img(params);
  divReturn.appendChild(img);
  return divReturn;
}
