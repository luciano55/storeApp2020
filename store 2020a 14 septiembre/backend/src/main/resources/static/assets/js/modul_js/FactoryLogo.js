import { FactoryTag } from "./factoryTag.js";
export function FactoryLogo() {
  const API = {};

  const factoryTag = new FactoryTag();
  let params = {};

  API.logoInformatica = function () {
    params.class = "logo";
    const article = factoryTag.article(params);
    params.class = "";
    params.src = "assets/img/escudo02.png";
    params.alt = "Escudo Informática";
    const img = factoryTag.image(params);

    article.appendChild(img);
    return article;
  };
  API.logoHarnina = function () {
    params.class = "logo";
    const article = factoryTag.article(params);
    params.class = "";
    params.href = "https://iesarroyoharnina.educarex.es/";
    params.target = "_blank";
    params.title = "I.E.S. Arroyo Harnina";
    const a = factoryTag.a(params);
    params = {};
    params.class = "imageLogo";
    params.src = "assets/img/harni01.png";
    const img = factoryTag.image(params);
    a.appendChild(img);
    article.appendChild(a);
    return article;
  };
  return API;
}
